import { Component } from '@angular/core'
import { environment } from '@nx-prisma-admin/web/core/feature'
import { ApolloAngularSDK } from '@nx-prisma-admin/web/util/sdk'

@Component({
  template: `
    <div class="container mx-auto my-3 my-md-5">
      <div class="card">
        <div class="card-header">About</div>
        <pre>{{ environment | json }}</pre>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class WebAboutFeatureComponent {
  public environment = environment
  public uptime$ = this.sdk.uptimeWatch().valueChanges
  constructor(private readonly sdk: ApolloAngularSDK) {}
}
