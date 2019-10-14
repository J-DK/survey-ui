import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../../models/model';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-attend-survey',
  templateUrl: './attend-survey.component.html',
  styleUrls: ['./attend-survey.component.scss']
})
export class AttendSurveyComponent implements OnInit {

  id: string;
  survey: Survey;

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.surveyService.getSurvey(this.id).subscribe((res) => {

        let survey: Survey = {
          id: res.responseData.surveys.surveyId,
          emailId: res.responseData.surveys.userId,
          surveyName: res.responseData.surveys.surveyName,
          questionnaire: res.responseData.surveys.questions
        };
        this.survey = survey;
      });
    });
  }

}
