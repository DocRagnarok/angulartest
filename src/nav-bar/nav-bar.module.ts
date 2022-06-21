import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { AppRoutingModule } from 'src/app/app.route';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
