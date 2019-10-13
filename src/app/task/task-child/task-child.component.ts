import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-task-child',
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.scss']
})
export class TaskChildComponent {

  @Input() varA: Observable<number>;
  @Input() varB: Observable<number>;

  constructor() {

  }

}
