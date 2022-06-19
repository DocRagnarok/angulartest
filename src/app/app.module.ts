import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomecomModule } from 'src/homecom/homecom.module';
import { NavBarModule } from 'src/nav-bar/nav-bar.module';

import { AppComponent } from './app.component';
import { CalappModule } from './calapp/calapp.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavBarModule, HomecomModule, CalappModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
