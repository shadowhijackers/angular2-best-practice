import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {SharedModule} from '../shared/shared.module';
import {ContainerComponent} from './container';
import {AUTH_COMPONENTS} from './components/exports';

@NgModule({
  declarations: [
    AuthComponent,
    ContainerComponent,
    ...AUTH_COMPONENTS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule {
}
