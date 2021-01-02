import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK, MetaSchema } from '@nx-prisma-admin/web/util/sdk'
import { switchMap } from 'rxjs/operators'

interface WebMetaModelState {
  schema?: MetaSchema
}

@Injectable()
export class WebMetaFeatureStore extends ComponentStore<WebMetaModelState> {
  readonly schema$ = this.select(this.state$, ({ schema }) => schema)
  readonly vm$ = this.select(this.schema$, (schema) => ({ schema }))

  constructor(route: ActivatedRoute, private readonly sdk: ApolloAngularSDK) {
    super({})
    this.loadSchemaEffect()
  }

  readonly loadSchemaEffect = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.sdk.metaSchema().pipe(tapResponse((res) => this.patchState({ schema: res?.data?.schema }), console.error)),
      ),
    ),
  )
}
