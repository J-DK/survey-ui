import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendSurveyModule } from './features/components/attend-survey/attend-survey.module';
import { CreateSurveyModule } from './features/components/create-survey/create-survey.module';
import { HomeModule } from './features/components/home/home.module';
import { LoginModule } from './features/components/login/login.module';
import { MySurveysModule } from './features/components/my-surveys/my-surveys.module';
import { SurveyResponseComponent } from './features/components/survey-response/survey-response.component';
import { SurveyResponseModule } from './features/components/survey-response/survey-response.module';

@NgModule({
  declarations: [
    AppComponent,
    SurveyResponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    HomeModule,
    MySurveysModule,
    SurveyResponseModule,
    CreateSurveyModule,
    LoginModule,
    AttendSurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
