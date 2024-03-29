import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ToastModule } from '../toast/toast.module';
import { SurveyComponent } from './survey.component';

@NgModule({
  declarations: [SurveyComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [SurveyComponent]
})
export class SurveyModule { }