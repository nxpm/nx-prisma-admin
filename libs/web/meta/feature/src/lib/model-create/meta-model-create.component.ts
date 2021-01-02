import { Component } from '@angular/core'
import { MetaModelCreateStore } from './meta-model-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="bg-gray-800 p-4 rounded shadow">
        <meta-model [model]="vm?.model"></meta-model>
      </div>
    </ng-container>
  `,
  providers: [MetaModelCreateStore],
})
export class MetaModelCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: MetaModelCreateStore) {}
}
