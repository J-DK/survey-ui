import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../../models/model';
import { AuthService } from '../../services/auth.service';
import { SurveyService } from '../../services/survey.service';
import { ToastState } from '../toast/toast-state.enum';
import { SurveyToastService } from '../toast/toast.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.scss']
})
export class SurveyResponseComponent implements OnInit {

  responses: FeedBack[] = [];
  constructor(private responseService: SurveyService,
              private toastService: SurveyToastService,
              private authService: AuthService) { }


  ngOnInit() {
    this.responseService.getResponses(this.authService.userName).subscribe((res) => {
      res.responseData.feedbacks.forEach((feedback) => {
        this.responses.push({
          surveyName: feedback.surveyName,
          surveyId: feedback.surveyId,
          surveyedBy: feedback.surveyedBy,
          author: feedback.author,
          answers: JSON.parse(feedback.answer)
        });
      });
      this.toastService.activate(ToastState.SUCCESS, `Fetched your survey responses successfully!!`);
    }, () => {
      this.toastService.activate(ToastState.ERROR, `It seems there is an issue while fetching your survey responses. Please try again later`);
    });
  }

}
