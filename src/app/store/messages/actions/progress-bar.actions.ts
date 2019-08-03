import {Action} from '@ngrx/store';

export enum ProgressBarActionTypes {
  OpenProgressBar = '[PROGRESS BAR] OPEN PROGRESS BAR',
  CloseProgressBar = '[PROGRESS BAR] CLOSE PROGRESS BAR',

}

export class OpenProgressBar implements Action {
  readonly type = ProgressBarActionTypes.OpenProgressBar;

  constructor(public payload: {
    isProgessBarOpen: boolean,
    operationName: string
  }) {
  }
}

export class CloseProgressBar implements Action {
  readonly type = ProgressBarActionTypes.CloseProgressBar;

  constructor(public payload: {
    isProgessBarOpen: boolean,
    operationName: string
  }) {
  }
}

export type ProgressBarActions = OpenProgressBar |
  CloseProgressBar;
