import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {taskReducer} from './reducers/task.reducers';

export const taskRoutes: Routes = [
  { path: '' , redirectTo: '/task', pathMatch: 'full'},
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: '**',
    redirectTo: '/task'
  }
];

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes),
    StoreModule.forFeature('taskState', taskReducer)
  ],
  exports: [TaskComponent, RouterModule],
  providers: []
})
export class TaskModule {
}
