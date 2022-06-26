import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomecomModule } from 'src/homecom/homecom.module';
import { NavBarModule } from 'src/nav-bar/nav-bar.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalappModule } from './calapp/calapp.module';
import { QappModule } from './qapp/qapp.module';
import { MatSliderModule } from '@angular/material/slider';
import { QappQ2Component } from './qapp-q2/qapp-q2.component';
import { HttpClientModule } from '@angular/common/http';
import { PianoappModule } from './pianoapp/pianoapp.module';

@NgModule({
  declarations: [AppComponent, QappQ2Component],
  imports: [
    BrowserModule,
    NavBarModule,
    HomecomModule,
    CalappModule,
    FormsModule,
    QappModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//ห้าม declarations component หลายที่ ถ้านาย ไม่อยากทำเป็น module ให้ทำแบบนี้
