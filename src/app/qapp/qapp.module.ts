import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QappComponent } from './qapp.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from 'src/app/app.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QappComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatPaginatorModule,
    AccordionModule,
    ButtonModule,
    AppRoutingModule,
    RouterModule,
  ],

  exports: [QappComponent],
})
export class QappModule {}
