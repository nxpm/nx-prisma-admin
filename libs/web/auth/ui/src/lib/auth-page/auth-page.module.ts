import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiFormModule } from '@nx-prisma-admin/web/ui/form'
import { AuthPageComponent } from './auth-page.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule, UiFormModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
