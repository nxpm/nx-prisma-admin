import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMetaModelModule } from '@nx-prisma-admin/web/meta/ui'
import { MetaGeneratedComponent } from './meta-generated.component'

@NgModule({
  declarations: [MetaGeneratedComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: MetaGeneratedComponent }]), UiMetaModelModule],
})
export class MetaGeneratedModule {}
