import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TaskState} from '../reducers/task.reducers';

export const selectTaskState = createFeatureSelector<TaskState>('taskState');

export const variablesSelector = createSelector(
  selectTaskState,
  (task) => task.data
);
