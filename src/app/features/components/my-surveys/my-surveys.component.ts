import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../../models/model';
import { AuthService } from '../../services/auth.service';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.scss']
})
export class MySurveysComponent implements OnInit {
  @Input()
  surveys: Survey[] = [];

  viewSurvey;

  constructor(private mySurveysService: SurveyService, private authService: AuthService) {
  }

  ngOnInit() {
    this.mySurveysService.getSurveys().subscribe(res => {
      res.responseData.surveys.forEach((survey) => {
        if (this.authService.userName === survey.userId) {
          this.surveys.push({
            surveyName: survey.surveyName,
            id: survey.surveyId,
            emailId: survey.userId,
            questionnaire: survey.questions
          });
        }
      });
    });
  }

  showSurvey(survey: Survey) {
    this.viewSurvey = survey;
  }

}
