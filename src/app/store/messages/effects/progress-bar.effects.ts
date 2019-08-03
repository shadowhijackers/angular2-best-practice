import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProgressBarActionTypes, ProgressBarActions } from '../actions/progress-bar.actions';


@Injectable()
export class ProgressBarEffects {


  @Effect()
  loadProgressBars$ = this.actions$.pipe(
    ofType(ProgressBarActionTypes.OpenProgressBar),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ProgressBarActions>) {}

}
