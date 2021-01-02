import { Component } from '@angular/core'
import { UiIcon } from '@nx-prisma-admin/web/ui/icon'
import { ApolloAngularSDK } from '@nx-prisma-admin/web/util/sdk'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <div class="container mx-auto my-3 my-md-5">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <div class="grid grid-cols-8">
            <ng-container *ngFor="let icon of icons">
              <div class="p-4 flex flex-col items-center space-y-4">
                <ui-icon [icon]="icon" size="lg"></ui-icon>

                <span class="text-gray-500 text-sm">{{ icon }}</span>
              </div>
            </ng-container>
          </div>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class WebDashboardFeatureComponent {
  public uptime$ = this.sdk.uptimeWatch().valueChanges.pipe(map((res) => res?.data?.uptime))
  public me$ = this.sdk.me().pipe(map((res) => res?.data?.me))
  icons = Object.keys(UiIcon)
  constructor(private readonly sdk: ApolloAngularSDK) {}
}
