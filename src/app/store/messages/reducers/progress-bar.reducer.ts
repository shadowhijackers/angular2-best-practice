import {ProgressBarActions, ProgressBarActionTypes} from '../actions/progress-bar.actions';

export interface State {
  isProgessBarOpen: boolean;
  operationName: string;
}

export const initialState: State = {
  isProgessBarOpen: false,
  operationName: ''
};

export function reducer(state = initialState, action: ProgressBarActions): State {
  switch (action.type) {

    case ProgressBarActionTypes.OpenProgressBar:
      return action.payload;
    case ProgressBarActionTypes.CloseProgressBar:
      return action.payload;

    default:
      return state;
  }
}
