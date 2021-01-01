import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@nx-prisma-admin/web/auth/data-access'
import { UiFormModule } from '@nx-prisma-admin/web/ui/form'
import { AuthPageModule } from '@nx-prisma-admin/web/auth/ui'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiFormModule, AuthPageModule, WebAuthDataAccessModule],
})
export class LogoutModule {}
