import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomComponent } from 'src/homecom/homecom.component';
import { CalappComponent } from './calapp/calapp.component';
import { QappQ2Component } from './qapp-q2/qapp-q2.component';
import { QappComponent } from './qapp/qapp.component';

const routes: Routes = [
  { path: 'image', component: HomecomComponent },
  { path: 'calculator', component: CalappComponent },
  {
    path: 'quiz',
    component: QappComponent,
    children: [{ path: 'q2', component: QappQ2Component }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
