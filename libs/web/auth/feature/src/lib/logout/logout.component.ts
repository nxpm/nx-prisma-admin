import { Component, OnInit } from '@angular/core'
import { WebAuthStore } from '@nx-prisma-admin/web/auth/data-access'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <auth-page pageTitle="Logging out">
        <div class="error" *ngIf="vm.errors">
          {{ vm.errors }}
        </div>
      </auth-page>
    </ng-container>
  `,
})
export class LogoutComponent implements OnInit {
  readonly vm$ = this.authStore.vm$
  constructor(private readonly authStore: WebAuthStore) {}

  ngOnInit(): void {
    this.authStore.logoutEffect()
  }
}
