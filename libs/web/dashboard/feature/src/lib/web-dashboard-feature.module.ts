import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiIconModule } from '@nx-prisma-admin/web/ui/icon'
import { WebDashboardFeatureComponent } from './web-dashboard-feature.component'

@NgModule({
  declarations: [WebDashboardFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDashboardFeatureComponent }]),
    UiIconModule,
  ],
})
export class WebDashboardFeatureModule {}
