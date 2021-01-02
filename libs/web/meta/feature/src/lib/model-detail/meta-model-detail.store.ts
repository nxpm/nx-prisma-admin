import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore } from '@ngrx/component-store'
import { MetaModel } from '@nx-prisma-admin/web/util/sdk'
import { map, pluck, switchMap } from 'rxjs/operators'
import { WebMetaFeatureStore } from '../web-meta-feature.store'

interface WebMetaModelState {
  model?: MetaModel
}

@Injectable()
export class MetaModelDetailStore extends ComponentStore<WebMetaModelState> {
  readonly model$ = this.select(this.state$, ({ model }) => model)
  readonly vm$ = this.select(this.meta.schema$, this.model$, (schema, model) => ({ schema, model }))

  constructor(route: ActivatedRoute, private readonly meta: WebMetaFeatureStore) {
    super({})
    this.loadModelEffect(route.params.pipe(pluck('modelId')))
  }

  readonly loadModelEffect = this.effect<string>((modelId$) =>
    modelId$.pipe(
      switchMap((modelId: string) =>
        this.meta.vm$.pipe(map((res) => this.patchState({ model: res?.schema?.models.find((m) => m.id === modelId) }))),
      ),
    ),
  )
}
