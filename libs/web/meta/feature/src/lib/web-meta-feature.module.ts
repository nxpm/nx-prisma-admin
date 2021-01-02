import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LoadChildren, Route, RouterModule } from '@angular/router'
import { WebMetaFeatureComponent } from './web-meta-feature.component'

function route(r: Route): Route {
  return { path: '', ...r }
}

function routeRedirect(path: string): Route {
  return route({ pathMatch: 'full', redirectTo: path })
}

function routeLazy(path: string, loadChildren: LoadChildren): Route {
  return route({ path, loadChildren })
}

function routeChildren(component: any, children: Route[]): Route {
  return route({ component, children })
}

@NgModule({
  declarations: [WebMetaFeatureComponent],
  imports: [
    RouterModule.forChild([
      routeChildren(WebMetaFeatureComponent, [
        routeRedirect('models'),
        routeLazy('models', () => import('./model-list/meta-model-list.module').then((m) => m.MetaModelListModule)),
        routeLazy('models/:modelId', () =>
          import('./model-detail/meta-model-detail.module').then((m) => m.MetaModelDetailModule),
        ),
      ]),
    ]),
    CommonModule,
  ],
})
export class WebMetaFeatureModule {}
