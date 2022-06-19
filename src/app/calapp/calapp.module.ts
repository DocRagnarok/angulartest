import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalappComponent } from './calapp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalappComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalappComponent],
})
export class CalappModule {}
