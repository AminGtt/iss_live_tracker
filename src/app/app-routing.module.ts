import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {NotFoundViewComponent} from './views/not-found-view/not-found-view.component';

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'not-found', component: NotFoundViewComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
