import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {variableASelector, variableBSelector} from './store/selectors/task.selectors';
import {TaskActions} from './store/actions/task-action-types';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

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
    if (!this.counterSubscribe || this.counterSubscribe.closed) {
      this.counterSubscribe = interval(1000).pipe(
        map((num) => num)
      ).subscribe(data => {
        this.store.dispatch(TaskActions.change());
      });
    }
  }

  stop() {
    if (this.counterSubscribe || !this.counterSubscribe.closed) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
