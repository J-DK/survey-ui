import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { QuestionModule } from '../question/question.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ClarityModule,
    QuestionModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }