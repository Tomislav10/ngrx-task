import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {RouterModule, Routes} from '@angular/router';

export const taskRoutes: Routes = [
  { path: '' , redirectTo: '/task', pathMatch: 'full'},
  {
    path: 'task',
    component: TaskComponent,
    resolve: {
      // courses: CoursesResolver
    }
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
    RouterModule.forChild(taskRoutes),
  ],
  exports: [TaskComponent, RouterModule],
  providers: []
})
export class TaskModule {
}
