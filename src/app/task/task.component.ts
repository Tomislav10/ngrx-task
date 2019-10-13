import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {variablesSelector} from './selectors/task.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  variableA: number;
  variableB: number;

  constructor(private store: Store<AppState>) {

  }


  ngOnInit() {
    this.setVariables();
  }

  setVariables() {
    this.store.pipe(select(variablesSelector))
      .subscribe((variablesData) => {
        this.variableA = variablesData.variableA;
        this.variableB = variablesData.variableB;
      });

    console.log('A', this.variableA);
    console.log('B', this.variableB);

  }

}
