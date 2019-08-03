import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AngularMaterialModules} from '../angular-material';
import {MESSAGE_COMPONENTS} from './components/messages/exports';
import {MessageService} from '@shared/providers';


export const COMPONENTS = [
  ...MESSAGE_COMPONENTS
];


@NgModule({
  declarations: [
    ...MESSAGE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    AngularMaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
    AngularMaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    MessageService
  ],
})
export class SharedModule {
}
