import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {variableASelector, variableBSelector} from './store/selectors/task.selectors';
import {TaskActions} from './store/actions/task-action-types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  alreadyReset = true;

  counterSubscribe: Subscription;

  variableA: Observable<number>;
  variableB: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.variableA = this.store.pipe(select(variableASelector));
    this.variableB = this.store.pipe(select(variableBSelector));
  }


  start() {
    this.alreadyReset = false;
    if (!this.counterSubscribe || this.counterSubscribe.closed) {
      this.counterSubscribe = interval(1000).subscribe(() => {
        this.store.dispatch(TaskActions.change());
      });
    }
  }

  stop() {
    if (this.counterSubscribe || !this.counterSubscribe.closed) {
      this.counterSubscribe.unsubscribe();
    }
  }

  reset() {
    this.stop();
    if (!this.alreadyReset) {
      this.store.dispatch(TaskActions.reset());
    }
    this.alreadyReset = true;
  }
}
