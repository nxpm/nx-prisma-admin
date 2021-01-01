import { Component } from '@angular/core'
import { WebAuthStore } from '@nx-prisma-admin/web/auth/data-access'
import { LoginInput } from '@nx-prisma-admin/web/util/sdk'
import { UiFormField } from '@nx-prisma-admin/web/ui/form'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <auth-page
        (submitForm)="submit($event)"
        [errors]="vm.errors"
        [fields]="fields"
        buttonTitle="Log in"
        linkPath="/register"
        linkTitle="Register"
        pageTitle="Login"
      >
      </auth-page>
    </ng-container>
  `,
})
export class LoginComponent {
  readonly vm$ = this.authStore.vm$
  readonly fields = [
    UiFormField.email('email', { label: 'Email', required: true }),
    UiFormField.password('password', { label: 'Password', required: true }),
  ]
  constructor(private readonly authStore: WebAuthStore) {}

  submit(input: LoginInput) {
    this.authStore.loginEffect(input)
  }
}
