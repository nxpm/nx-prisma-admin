import { Component } from '@angular/core'
import { MetaGeneratedStore } from './meta-generated.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container mx-auto my-6 my-md-12 flex flex-col space-y-6">
        <div class="bg-gray-800 p-4 rounded shadow">
          <pre>{{ vm.structure | json }}</pre>
        </div>
      </div>
    </ng-container>
  `,
  providers: [MetaGeneratedStore],
})
export class MetaGeneratedComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: MetaGeneratedStore) {}
}
