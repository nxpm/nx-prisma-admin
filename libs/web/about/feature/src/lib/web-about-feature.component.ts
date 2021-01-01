import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nx-prisma-admin/web/core/data-access'
import { environment } from '@nx-prisma-admin/web/core/feature'

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
  public uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
