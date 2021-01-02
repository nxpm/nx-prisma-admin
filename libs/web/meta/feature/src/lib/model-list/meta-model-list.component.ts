import { Component } from '@angular/core'
import { WebMetaFeatureStore } from '../web-meta-feature.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="bg-gray-800 p-4 rounded shadow">
        <div class="text-xl pb-3 px-1 font-semibold">Models</div>
        <div class="grid grid-cols-4 gap-6">
          <ng-container *ngFor="let model of vm?.schema?.models">
            <meta-model [model]="model"></meta-model>
          </ng-container>
        </div>
      </div>
      <div class="bg-gray-800 p-4 rounded shadow">
        <div class="text-xl pb-3 px-1 font-semibold">Enums</div>
        <div class="grid grid-cols-4 gap-6">
          <ng-container *ngFor="let enum of vm?.schema?.enums">
            <div class="bg-gray-700 rounded shadow p-4">
              <div class="text-lg pb-3 px-1 font-semibold">{{ enum.id }}</div>
              <div class="font-mono text-sm grid grid-cols-1">
                <ng-container *ngFor="let field of enum.values">
                  <div>
                    {{ field }}
                  </div>
                </ng-container>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </ng-container>
  `,
  providers: [WebMetaFeatureStore],
})
export class MetaModelListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: WebMetaFeatureStore) {}
}
