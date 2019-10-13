import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../../models/model';
import { MySurveysService } from './my-surveys.service';

@Component({
  selector: 'my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.scss']
})
export class MySurveysComponent implements OnInit {
  @Input()
  surveys: Survey[];

  viewSurvey;
  constructor(private mySurveysService: MySurveysService) { }

  ngOnInit() {
    this.mySurveysService.getMySurveys().subscribe(res => {
      console.log("res", res);
      this.surveys = res;
    });
  }

  showSurvey(survey: Survey) {
    this.viewSurvey = survey;
    console.log("survey", survey);
  }

}
