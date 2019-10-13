import {
  createReducer,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';

export interface TaskState {
  variableA: number;
  variableB: number;
}

export const initialTaskState: TaskState = {
  variableA: -5,
  variableB: 10
};

export const taskReducer = createReducer(
  initialTaskState
);


export const metaReducers: MetaReducer<TaskState>[] = !environment.production ? [] : [];
