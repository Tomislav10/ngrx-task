import {
  createReducer,
  MetaReducer, on
} from '@ngrx/store';
import {environment} from '../../../../environments/environment';
import {TaskActions} from '../actions/task-action-types';

export interface TaskState {
  variableA: number;
  variableB: number;
}

export const initialTaskState: TaskState = {
  variableA: -5,
  variableB: 10
};

export const taskReducer = createReducer(
  initialTaskState,

  on(TaskActions.increase, (state, action) => {
    return {
      variableA: state.variableA + 1,
      variableB: state.variableB
    };
  }),

  on(TaskActions.decrease, (state, action) => {
    return {
      variableA: state.variableA,
      variableB: state.variableB - 1
    };
  })
);


export const metaReducers: MetaReducer<TaskState>[] = !environment.production ? [] : [];
