import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { SurveyToast } from './toast.component';
import { SurveyToastService } from './toast.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [SurveyToast],
  providers: [SurveyToastService],
  exports: [SurveyToast],
})
export class ToastModule {
}
