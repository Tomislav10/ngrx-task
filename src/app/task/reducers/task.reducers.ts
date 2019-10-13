import {
  ActionReducerMap, createReducer,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {DataModel} from '../model/data.model';

export interface TaskState {
  data: DataModel;
}

export const initialTaskState: TaskState = {
  data: { variableA: -5, variableB: 10}
};

export const taskReducer = createReducer(
  initialTaskState
);


export const metaReducers: MetaReducer<TaskState>[] = !environment.production ? [] : [];
