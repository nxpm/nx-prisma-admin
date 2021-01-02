import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@nx-prisma-admin/web/util/sdk'
import { switchMap } from 'rxjs/operators'

interface WebMetaModelState {
  structure?: any
}

@Injectable()
export class MetaGeneratedStore extends ComponentStore<WebMetaModelState> {
  readonly structure$ = this.select(this.state$, ({ structure }) => structure)
  readonly vm$ = this.select(this.structure$, (structure) => ({ structure }))

  constructor(private readonly sdk: ApolloAngularSDK) {
    super({})
    this.loadModelEffect()
  }

  readonly loadModelEffect = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.sdk
          .metaGenerated()
          .pipe(tapResponse((res) => this.patchState({ structure: res.data.generated }), console.error)),
      ),
    ),
  )
}
