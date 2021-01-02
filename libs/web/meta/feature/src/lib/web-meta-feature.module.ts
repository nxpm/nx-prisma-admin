import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  routeChildren as children,
  routeGroup as group,
  routeLazy as lazy,
  routeRedirect as redirect,
} from 'ngx-router-fns'
import { WebMetaFeatureComponent } from './web-meta-feature.component'

@NgModule({
  declarations: [WebMetaFeatureComponent],
  imports: [
    RouterModule.forChild([
      children(WebMetaFeatureComponent, [
        redirect('models'),
        group('models', [
          lazy('', () => import('./model-list/meta-model-list.module').then((m) => m.MetaModelListModule)),
          lazy('create', () => import('./model-create/meta-model-create.module').then((m) => m.MetaModelCreateModule)),
          lazy(':modelId', () =>
            import('./model-detail/meta-model-detail.module').then((m) => m.MetaModelDetailModule),
          ),
        ]),
      ]),
    ]),
    CommonModule,
  ],
})
export class WebMetaFeatureModule {}
