import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SurveyModule } from '../survey/survey.module';
import { AttendSurveyComponent } from './attend-survey.component';

@NgModule({
  declarations: [AttendSurveyComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyModule
  ],
  exports: [AttendSurveyComponent]
})
export class AttendSurveyModule { }
