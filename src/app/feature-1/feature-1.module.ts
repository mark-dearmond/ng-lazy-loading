import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature-1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    children: [
      {
        path: 'child-1',
        loadChildren: () =>
          import('./child-1/child-1.module').then((m) => m.Child1Module),
      },
      {
        path: 'child-2',
        loadChildren: () =>
          import('./child-2/child-2.module').then((m) => m.Child2Module),
      },
    ],
  },
];

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1Module {}
