import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QappComponent } from './qapp.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { QappQ2Component } from '../qapp-q2/qapp-q2.component';
import { QappQ1Component } from '../qapp-q1/qapp-q1.component';
const routes: Routes = [
  {
    path: 'quiz',
    children: [
     { path: '1', component: QappQ1Component },
     { path: '2', component: QappQ2Component }
    ]
  }
];


@NgModule({
  declarations: [QappComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [QappComponent],
})
export class QappModule {}