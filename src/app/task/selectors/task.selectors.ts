import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TaskState} from '../reducers/task.reducers';

export const selectTaskState = createFeatureSelector<TaskState>('taskState');

export const variableASelector = createSelector(
  selectTaskState,
  (task) => task.variableA
);

export const variableBSelector = createSelector(
  selectTaskState,
  (task) => task.variableB
);
