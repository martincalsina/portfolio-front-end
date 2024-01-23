import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home/1'},
  {path: 'home/:id', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}, 
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  { path: '**', pathMatch: 'full',  loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
