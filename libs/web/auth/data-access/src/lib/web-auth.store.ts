import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ApolloAngularSDK, LoginInput, RegisterInput, User } from '@nx-prisma-admin/web/util/sdk'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

interface WebAuthState {
  errors?: any
  user?: User
}

@Injectable({ providedIn: 'root' })
export class WebAuthStore extends ComponentStore<WebAuthState> {
  readonly errors$: Observable<any> = this.select((s) => s.errors)

  readonly user$: Observable<User> = this.select((s) => s.user)

  readonly loggedIn$: Observable<boolean> = this.select(this.user$, (user) => !!user)

  readonly vm$ = this.select(this.user$, this.loggedIn$, this.errors$, (user, loggedIn, errors) => ({
    user,
    loggedIn,
    errors,
  }))

  constructor(public readonly sdk: ApolloAngularSDK, private readonly router: Router) {
    super()
    this.initializeEffect()
  }

  readonly initializeEffect = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.sdk.me().pipe(
          tapResponse(
            (res) => this.setState({ user: res.data.me }),
            () => this.setState({ errors: null }),
          ),
        ),
      ),
    ),
  )

  readonly loginEffect = this.effect<LoginInput>((input$) =>
    input$.pipe(
      switchMap((input: LoginInput) =>
        this.sdk.login({ input }).pipe(
          tapResponse(
            (res) => {
              this.setState({ user: res.data?.login?.user, errors: res.errors })
              this.router.navigate(['/'])
            },
            (errors) => this.setState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly logoutEffect = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.sdk.logout().pipe(
          tapResponse(
            () => {
              this.setState({ user: null, errors: null })
              this.router.navigate(['/'])
            },
            (errors) => this.setState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly registerEffect = this.effect<RegisterInput>((input$) =>
    input$.pipe(
      switchMap((input: RegisterInput) =>
        this.sdk.register({ input }).pipe(
          tapResponse(
            (res) => {
              this.setState({ user: res.data?.register?.user, errors: res.errors })
              this.router.navigate(['/'])
            },
            (errors) => this.setState({ errors }),
          ),
        ),
      ),
    ),
  )
}
