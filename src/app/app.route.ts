import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomComponent } from 'src/homecom/homecom.component';
import { CalappComponent } from './calapp/calapp.component';

const routes: Routes = [
  { path: 'image', component: HomecomComponent },
  { path: 'calculator', component: CalappComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
