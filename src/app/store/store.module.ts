import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {CommonModule} from '@angular/common';
import * as fromState from './reducers';
import {environment} from '@env/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot( fromState.reducers, {metaReducers: fromState.metaReducers}),
    EffectsModule.forRoot(fromState.effects),
    StoreDevtoolsModule.instrument({maxAge: 50, logOnly: !environment.production}),
  ]
})
export class APPStoreModule {
}
