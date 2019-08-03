import {createFeatureSelector, createSelector} from '@ngrx/store';


export namespace MessageSelectors {

  export const messageState = createFeatureSelector<{isProgessBarOpen: false, operation: string}>('progressBar');
  export const progressBarState = createSelector(messageState, state => {
    return !!state && state.isProgessBarOpen;
  });

}
