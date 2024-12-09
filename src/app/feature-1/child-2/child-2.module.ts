import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child-2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: Child2Component,
      },
    ]),
  ],
})
export class Child2Module {}
