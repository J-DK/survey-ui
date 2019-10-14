import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SurveyModule } from '../survey/survey.module';
import { ToastModule } from '../toast/toast.module';
import { MySurveysComponent } from './my-surveys.component';

@NgModule({
  declarations: [MySurveysComponent],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyModule,
    ToastModule
  ],
  exports: [MySurveysComponent]
})
export class MySurveysModule { }
