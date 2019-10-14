import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../../models/model';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.scss']
})
export class MySurveysComponent implements OnInit {
  @Input()
  surveys: Survey[];

  viewSurvey;
  constructor(private mySurveysService: SurveyService) { }

  ngOnInit() {
    this.mySurveysService.getMySurveys().subscribe(res => {
      this.surveys = res;
    });
  }

  showSurvey(survey: Survey) {
    this.viewSurvey = survey;
  }

}
