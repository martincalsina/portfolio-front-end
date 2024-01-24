import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './components/error404/error404.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    Error404RoutingModule,
    RouterModule
  ],
  exports: [
    Error404Component
  ]
})
export class Error404Module { }
