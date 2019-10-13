import { Component, OnInit } from '@angular/core';
import { Survey } from '../../models/model';
import { SurveyService } from '../../services/survey.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attend-survey',
  templateUrl: './attend-survey.component.html',
  styleUrls: ['./attend-survey.component.scss']
})
export class AttendSurveyComponent implements OnInit {

  id: number;
  survey: Survey;
  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.surveyService.getSurvey(this.id).subscribe((res) => {
        this.survey = res;
      })
    });
  }

}
