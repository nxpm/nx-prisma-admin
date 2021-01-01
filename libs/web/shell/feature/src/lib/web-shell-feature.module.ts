import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IsLoggedInGuard, WebAuthDataAccessModule } from '@nx-prisma-admin/web/auth/data-access'
import { WebLayoutComponent } from '@nx-prisma-admin/web/layout'
import { UiIconModule } from '@nx-prisma-admin/web/ui/icon'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@nx-prisma-admin/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@nx-prisma-admin/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@nx-prisma-admin/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebAuthDataAccessModule, UiIconModule],
})
export class WebShellFeatureModule {}
