import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomecomModule } from 'src/homecom/homecom.module';
import { NavBarModule } from 'src/nav-bar/nav-bar.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalappModule } from './calapp/calapp.module';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [
    BrowserModule,
    NavBarModule,
    HomecomModule,
    CalappModule,
    FormsModule,
    QuizComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
