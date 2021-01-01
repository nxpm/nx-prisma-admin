import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@nx-prisma-admin/web/auth/data-access'
import { WebUiFormModule } from '@nx-prisma-admin/web/ui-form'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiFormModule, AuthPageModule, WebAuthDataAccessModule],
})
export class LoginModule {}
