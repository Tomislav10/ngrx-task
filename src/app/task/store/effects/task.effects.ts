import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TaskActions} from '../actions/task-action-types';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class TaskEffects {

  constructor(private action$: Actions) {
  }

  change = createEffect(
    () => this.action$.pipe(
      ofType(TaskActions.change),
      mergeMap(() => {
        return [TaskActions.increase(), TaskActions.decrease(), TaskActions.decrease()];
      })
    )
  );
}
