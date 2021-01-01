import { Component } from '@angular/core'
import { WebAuthStore } from '@nx-prisma-admin/web/auth/data-access'
import { RegisterInput } from '@nx-prisma-admin/web/util/sdk'
import { UiFormField } from '@nx-prisma-admin/web/ui/form'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <auth-page
        (submitForm)="submit($event)"
        [errors]="vm.errors"
        [fields]="fields"
        buttonTitle="Register"
        linkTitle="Log in"
        linkPath="/login"
        pageTitle="Register"
      >
      </auth-page>
    </ng-container>
  `,
})
export class RegisterComponent {
  readonly vm$ = this.authStore.vm$
  readonly fields = [
    UiFormField.email('email', { label: 'Email', required: true }),
    UiFormField.password('password', { label: 'Password', required: true }),
    UiFormField.input('username', { label: 'Username', required: false }),
    UiFormField.input('firstName', { label: 'First name', required: false }),
    UiFormField.input('lastName', { label: 'Last name', required: false }),
  ]

  constructor(private readonly authStore: WebAuthStore) {}

  public submit(input: RegisterInput) {
    this.authStore.registerEffect(input)
  }
}
