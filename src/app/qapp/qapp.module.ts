import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QappComponent } from './qapp.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [QappComponent],
  imports: [CommonModule, FormsModule, MatSliderModule, MatPaginatorModule],

  exports: [QappComponent],
})
export class QappModule {}
