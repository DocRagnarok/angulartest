import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { AppRoutingModule } from 'src/app/app.route';
import { PianoappModule } from 'src/app/pianoapp/pianoapp.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, AppRoutingModule, PianoappModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
