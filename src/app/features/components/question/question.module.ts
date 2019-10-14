import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ToastModule } from '../toast/toast.module';
import { QuestionComponent } from './question.component';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [QuestionComponent]
})
export class QuestionModule { }