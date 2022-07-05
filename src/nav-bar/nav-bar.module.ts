import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { AppRoutingModule } from 'src/app/app.route';
import { PianoappModule } from 'src/app/pianoapp/pianoapp.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PianoappModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  exports: [NavBarComponent],
})
export class NavBarModule {}
