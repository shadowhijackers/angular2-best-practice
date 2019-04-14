import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModules} from '../angular-material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModules,
    FlexLayoutModule
  ],
  exports: [
    AngularMaterialModules,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
