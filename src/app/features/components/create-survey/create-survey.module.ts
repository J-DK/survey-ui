import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SurveyModule } from '../survey/survey.module';
import { ToastModule } from '../toast/toast.module';
import { CreateSurveyComponent } from './create-survey.component';

@NgModule({
  declarations: [CreateSurveyComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SurveyModule,
    ToastModule
  ],
  exports: [CreateSurveyComponent]
})
export class CreateSurveyModule { }
