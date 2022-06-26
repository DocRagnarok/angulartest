import { NgModule } from '@angular/core';
import { PianoappComponent } from './pianoapp.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PianoappComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PianoappComponent }]),
  ],
  exports: [PianoappComponent],
})
export class PianoappModule {}
