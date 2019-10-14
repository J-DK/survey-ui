import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SurveyModule } from '../survey/survey.module';
import { ToastModule } from '../toast/toast.module';
import { AttendSurveyComponent } from './attend-survey.component';

@NgModule({
  declarations: [AttendSurveyComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyModule,
    ToastModule
  ],
  exports: [AttendSurveyComponent]
})
export class AttendSurveyModule { }
