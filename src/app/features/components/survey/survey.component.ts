import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Answer, FeedBack, Survey } from '../../models/model';
import { SurveyResponseService } from '../../services/survey-response.service';

@Component({
  selector: 'survey-form',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  @Input()
  isCreateSurvey: boolean = false;

  multiSelect: {
    id: string;
    values: string[]
  }[] = [];

  _survey: Survey;
  get survey() {
    return this._survey;
  }

  submitSurvey: FormGroup;

  @Input('survey')
  set survey(survey) {
    this._survey = survey;
    this.initForm();
  }


  constructor(private fb: FormBuilder, private responseService: SurveyResponseService) {
  }

  toggle(controlName, option: string) {
    let index = this.multiSelect.find(x => x.id === controlName).values.findIndex(x => x === option);
    if (index === -1) {
      this.multiSelect.find(x => x.id === controlName).values.push(option);
    } else {
      this.multiSelect.find(x => x.id === controlName).values.splice(index, 1);
    }
  }

  initForm() {
    let group: any = {};
    this.submitSurvey = this.fb.group({});
    this._survey.questionnaire.forEach(question => {
      if (question.type !== 'select') {
        group['Q' + question.id] = new FormControl('');
      } else {
        group['Q' + question.id] = new FormControl('');
        this.multiSelect.push({
          id: 'Q' + question.id,
          values: []
        });
      }
    });

    this.submitSurvey = new FormGroup(group);
  }

  ngOnInit() {
  }

  resetForm() {
    this.submitSurvey.reset();
    this.multiSelect = [];
  }



  submitFeedback() {
    let answers: Answer[] = [];
    this._survey.questionnaire.forEach(question => {
      if (question.type !== 'select') {
        answers.push({
          questionNo: question.id,
          question: question.title,
          questionType: question.type,
          value: this.submitSurvey.controls['Q' + question.id].value
        });
      } else {
        answers.push({
          questionNo: question.id,
          question: question.title,
          questionType: question.type,
          value: this.multiSelect.find(x => x.id === 'Q' + question.id).values
        });
      }
    });

    let feedBack: FeedBack = {
      surveyId: this._survey.id,
      surveyedBy: 'JDK',
      author: this._survey.userId,
      surveyName: this._survey.name,
      answers: answers
    };

    this.responseService.saveResponse(feedBack).subscribe(res => {
      console.log("res", res);
      this.resetForm();
    })
  }
}
