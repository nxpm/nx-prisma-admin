import { Component } from '@angular/core'
import { ApolloAngularSDK } from '@nx-prisma-admin/web/util/sdk'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <div class="container mx-auto my-3 my-md-5">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class WebDashboardFeatureComponent {
  public uptime$ = this.sdk.uptimeWatch().valueChanges.pipe(map((res) => res?.data?.uptime))
  public me$ = this.sdk.me().pipe(map((res) => res?.data?.me))
  constructor(private readonly sdk: ApolloAngularSDK) {}
}
