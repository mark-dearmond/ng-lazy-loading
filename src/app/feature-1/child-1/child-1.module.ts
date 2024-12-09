import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child-1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: Child1Component,
      },
    ]),
  ],
})
export class Child1Module {}
