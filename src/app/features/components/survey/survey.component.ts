import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Answer, FeedBack, Survey } from '../../models/model';
import { AuthService } from '../../services/auth.service';
import { SurveyService } from '../../services/survey.service';

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


  constructor(private fb: FormBuilder, private responseService: SurveyService,
              private authService: AuthService) {
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
        group['Q' + question.questionNo] = new FormControl('');
      } else {
        group['Q' + question.questionNo] = new FormControl('');
        this.multiSelect.push({
          id: 'Q' + question.questionNo,
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
          questionNo: question.questionNo,
          question: question.title,
          questionType: question.type,
          value: this.submitSurvey.controls['Q' + question.questionNo].value
        });
      } else {
        answers.push({
          questionNo: question.questionNo,
          question: question.title,
          questionType: question.type,
          value: this.multiSelect.find(x => x.id === 'Q' + question.questionNo).values
        });
      }
    });

    let feedBack: FeedBack = {
      surveyId: this._survey.id,
      surveyedBy: this.authService.userName,
      author: this._survey.emailId,
      surveyName: this._survey.surveyName,
      answers: answers
    };

    this.responseService.saveResponse(feedBack).subscribe(res => {
      console.log("res", res);
      this.resetForm();
    })
  }
}
