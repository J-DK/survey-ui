import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ToastModule } from '../toast/toast.module';
import { SurveyResponseComponent } from './survey-response.component';

@NgModule({
  declarations: [SurveyResponseComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ToastModule
  ],
  exports: [SurveyResponseComponent]
})
export class SurveyResponseModule { }
