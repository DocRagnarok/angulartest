import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecomComponent } from './homecom.component';
import { AppRoutingModule } from 'src/app/app.route';

@NgModule({
  declarations: [HomecomComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HomecomComponent],
})
export class HomecomModule {}
