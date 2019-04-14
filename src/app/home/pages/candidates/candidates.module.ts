import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CandidatesRoutingModule} from './candidates-routing.module';
import {CandidatesComponent} from './candidates.component';
import {SharedModule} from '../../../shared/shared.module';
import {CANDIDATES_COMPONENTS} from './components/exports';
import {ListComponent} from './containers';


@NgModule({
  declarations: [
    ...CANDIDATES_COMPONENTS,
    ListComponent,
    CandidatesComponent,
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule
  ]
})
export class CandidatesModule {
}
