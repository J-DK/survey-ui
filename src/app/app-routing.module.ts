import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './features/components/create-survey/create-survey.component';
import { HomeComponent } from './features/components/home/home.component';
import { MySurveysComponent } from './features/components/my-surveys/my-surveys.component';
import { SurveyResponseComponent } from './features/components/survey-response/survey-response.component';
import { LoginComponent } from './features/components/login/login.component';
import { AuthGuard } from './features/components/login/auth-guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'create-survey', component: CreateSurveyComponent, canActivate: [AuthGuard]  },
  { path: 'my-surveys', component: MySurveysComponent, canActivate: [AuthGuard]  },
  { path: 'survey-response', component: SurveyResponseComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
