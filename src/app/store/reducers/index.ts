import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import {environment} from '@env/environment';
import * as fromProgressBar from '../messages/reducers/progress-bar.reducer';
import {ProgressBarEffects} from '@app/store/messages/effects/progress-bar.effects';

export interface State {

  progressBar: fromProgressBar.State;
}

export const reducers: ActionReducerMap<State> = {

  progressBar: fromProgressBar.reducer,
};

export const effects = [
  ProgressBarEffects
];


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
