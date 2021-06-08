import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenzorComponent } from './cenzor/cenzor.component';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cenzor',
    component: CenzorComponent
  },
  {
    path: 'homework1',
    component: Homework1Component
  },
  {
    path: 'homework2',
    component: Homework2Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
