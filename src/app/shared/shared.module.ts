import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModules} from '../angular-material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularMaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
