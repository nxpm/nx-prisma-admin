import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { cloneDeep } from 'lodash'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { UiFormField } from '@nx-prisma-admin/web/ui/form'
import { ApolloAngularSDK, MetaModelData } from '@nx-prisma-admin/web/util/sdk'
import { map, pluck, switchMap, withLatestFrom } from 'rxjs/operators'
import { WebMetaFeatureStore } from '../web-meta-feature.store'

interface WebMetaModelState {
  modelMeta?: MetaModelData
  model?: Record<string, any>
  fields?: UiFormField[]
}

@Injectable()
export class MetaModelDetailStore extends ComponentStore<WebMetaModelState> {
  readonly fields$ = this.select(this.state$, ({ fields }) => fields)
  readonly modelMeta$ = this.select(this.state$, ({ modelMeta }) => modelMeta)
  readonly model$ = this.select(this.state$, ({ model }) => model)
  readonly vm$ = this.select(
    this.meta.schema$,
    this.modelMeta$,
    this.model$,
    this.fields$,
    (schema, modelMeta, model, fields) => ({
      schema,
      modelMeta,
      model,
      fields,
    }),
  )

  constructor(
    route: ActivatedRoute,
    private readonly meta: WebMetaFeatureStore,
    private readonly sdk: ApolloAngularSDK,
  ) {
    super({})
    this.loadModelEffect(route.params.pipe(pluck('modelId')))
  }

  readonly selectModel = this.updater<Record<string, any>>((state, value) => ({ ...state, model: value }))
  readonly loadModelEffect = this.effect<string>((modelId$) =>
    modelId$.pipe(
      switchMap((modelId: string) =>
        this.sdk.metaModelData({ model: modelId }, { fetchPolicy: 'no-cache' }).pipe(
          map((res) =>
            this.patchState({
              modelMeta: res?.data?.generated,
              model: {},
              fields: cloneDeep(this.createFields(res?.data?.generated)),
            }),
          ),
        ),
      ),
    ),
  )

  readonly submitFormEffect = this.effect<Record<string, any>>((input$) =>
    input$.pipe(
      withLatestFrom(this.modelMeta$),
      switchMap(([input, model]) =>
        this.sdk
          .metaCreateModelData({ model: model.model.id, data: input })
          .pipe(tapResponse(() => this.loadModelEffect(model.model.id), console.error)),
      ),
    ),
  )

  readonly deleteModelItem = this.effect<string>((recordId$) =>
    recordId$.pipe(
      withLatestFrom(this.modelMeta$),
      switchMap(([recordId, model]) =>
        this.sdk
          .metaDeleteModelRecord({ model: model.model.id, recordId })
          .pipe(tapResponse(() => this.loadModelEffect(model.model.id), console.error)),
      ),
    ),
  )

  createFields(meta: MetaModelData) {
    const schema = meta.schema
    const modelFields = schema.models.find((m) => m.id === meta.model?.id)?.fields

    return (
      meta.model?.fields
        ?.filter((field) => !field.relation)
        // .filter((field) => !['id', 'createdAt', 'updatedAt'].includes(field.id))
        .map((field) => {
          // Return radio buttons for Enums
          if (schema?.enums?.map((e) => e.id).includes(field.type)) {
            const thisEnum = schema?.enums?.find((e) => e.id === field.type)
            return UiFormField.radio(field.id, {
              label: field.id,
              required: field.required,
              options: thisEnum?.values?.map((value) => ({ value, label: value })),
            })
          }

          // Return a select box for Relations
          if (field.id?.endsWith('Id')) {
            const fieldId = field.id.replace('Id', '')
            const relationField = modelFields.find((m) => m.id === fieldId)
            const modelKey = schema.models
              .find((m) => m.id === relationField.type)
              ?.fields.filter((f) => f.type === 'String')[1]

            return UiFormField.select(field.id, {
              label: fieldId,
              required: field.required,
              options: this.sdk
                .metaModelData({ model: relationField.type })
                .pipe(
                  map((res) => res.data.generated.data.map((item) => ({ value: item.id, label: item[modelKey.id] }))),
                ),
            })
          }

          const baseField = ['id', 'createdAt', 'updatedAt'].includes(field.id)
          field.required = baseField ? false : field.required

          switch (field.type) {
            case 'Boolean':
              return UiFormField.checkbox(field.id, { label: field.id })
            case 'DateTime':
              return UiFormField.datetime(field.id, { label: field.id })
            case 'Int':
              return UiFormField.number(field.id, { label: field.id, required: field.required })
            case 'String':
              return UiFormField.input(field.id, { label: field.id, required: field.required })
            default:
              console.warn(`Unknown form field type ${field.type}`)
              return UiFormField.input(field.id, { label: field.id + ' ' + field.type, required: field.required })
          }
        })
        .sort((a, b) => (a.key > b.key ? 1 : b.key > a.key ? -1 : 0))
        .sort((a, b) =>
          a.templateOptions?.required > b.templateOptions?.required
            ? -1
            : b.templateOptions?.required > a.templateOptions?.required
            ? 1
            : 0,
        )
    )
  }
}
