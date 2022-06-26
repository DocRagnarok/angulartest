import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecomComponent } from './homecom.component';
import { AppRoutingModule } from 'src/app/app.route';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomecomComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [HomecomComponent],
})
export class HomecomModule {}
