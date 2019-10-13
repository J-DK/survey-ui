import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../../models/model';
import { SurveyResponseService } from '../../services/survey-response.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.scss']
})
export class SurveyResponseComponent implements OnInit {

  responses: FeedBack[] = [];
  constructor(private responseService: SurveyResponseService) { }

  ngOnInit() {
    this.responseService.getResponses().subscribe((res) => {
      this.responses = res;
    });
  }

}