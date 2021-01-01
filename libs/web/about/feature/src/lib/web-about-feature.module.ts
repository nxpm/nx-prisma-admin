import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebAboutFeatureComponent } from './web-about-feature.component'

@NgModule({
  declarations: [WebAboutFeatureComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebAboutFeatureComponent }]),
  ],
})
export class WebAboutFeatureModule {}
