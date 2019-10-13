import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {variableASelector, variableBSelector} from './selectors/task.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  variableA: Observable<number>;
  variableB: Observable<number>;

  constructor(private store: Store<AppState>) {

  }


  ngOnInit() {
    this.setVariables();
  }

  setVariables() {
    this.variableA = this.store.pipe(select(variableASelector));
    this.variableB = this.store.pipe(select(variableBSelector));
  }

}
