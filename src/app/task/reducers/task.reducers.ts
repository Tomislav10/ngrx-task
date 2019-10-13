import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface TaskState {

}

export const reducers: ActionReducerMap<TaskState> = {

};


export const metaReducers: MetaReducer<TaskState>[] = !environment.production ? [] : [];
