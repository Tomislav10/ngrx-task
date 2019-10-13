import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {taskReducer} from './reducers/task.reducers';
import {TaskEffects} from './effects/task.effects';
import {EffectsModule} from '@ngrx/effects';

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
    StoreModule.forFeature('taskState', taskReducer),
    EffectsModule.forRoot([TaskEffects])
  ],
  exports: [TaskComponent, RouterModule],
  providers: []
})
export class TaskModule {
}
