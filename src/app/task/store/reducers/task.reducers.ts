import {
  createReducer,
  on
} from '@ngrx/store';
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

  on(TaskActions.increase, (state) => {
    return {
      variableA: state.variableA + 1,
      variableB: state.variableB
    };
  }),

  on(TaskActions.decrease, (state) => {
    return {
      variableA: state.variableA,
      variableB: state.variableB - 1
    };
  }),

  on(TaskActions.reset, () => {
    return {
      variableA: initialTaskState.variableA,
      variableB: initialTaskState.variableB
    };
  }),
);
