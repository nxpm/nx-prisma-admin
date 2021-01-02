import { Component } from '@angular/core'
import { MetaModelDetailStore } from './meta-model-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="bg-gray-800 p-4 rounded shadow">
        <meta-model [model]="vm?.model"></meta-model>
      </div>
    </ng-container>
  `,
  providers: [MetaModelDetailStore],
})
export class MetaModelDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: MetaModelDetailStore) {}
}
