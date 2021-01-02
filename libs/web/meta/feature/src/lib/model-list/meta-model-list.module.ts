import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelModule } from '@nx-prisma-admin/web/meta/ui'
import { MetaModelListComponent } from './meta-model-list.component'

@NgModule({
  declarations: [MetaModelListComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: MetaModelListComponent }]), UiMetaModelModule],
})
export class MetaModelListModule {}
