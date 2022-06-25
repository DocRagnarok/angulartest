import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PianoappComponent } from './pianoapp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PianoappComponent],
  imports: [CommonModule, RouterModule],
  exports: [PianoappComponent],
})
export class PianoappModule {}
