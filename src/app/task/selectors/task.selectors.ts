import {createSelector} from '@ngrx/store';

export const variablesSelector = createSelector(
  state => state['taskState'],
  (task) => task.data
);
