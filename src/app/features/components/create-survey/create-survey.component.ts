import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question, QuestionType, Survey } from '../../models/model';
import { AuthService } from '../../services/auth.service';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'survey-create',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {
  opened = false;
  surveyName = '';
  survey: Survey;
  shouldCreateSurvey = true;
  questions: Question[] = [];
  createSurveyForm: FormGroup;
  selectedValue: QuestionType = "singleLine";
  @ViewChild('tagInput',  {static: false}) tagInputRef: ElementRef;
  optionalValues: string[] = [];

  constructor(private fb: FormBuilder,
              private createSurveyService: SurveyService,
              private authService: AuthService) { }


  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.createSurveyForm = this.fb.group({
      title: ['', Validators.required],
      optionalValues: [[]]
    });
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.createSurveyForm.controls.optionalValues.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
    } else {
      if (event.code === 'Space' || event.code === "Enter") {
        this.addTag(inputValue);
        this.createSurveyForm.controls.optionalValues.setValue([])
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0) {
      this.optionalValues.push(tag);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      this.optionalValues = this.optionalValues.filter(x => x !== tag);
    } else {
      this.optionalValues.splice(-1);
    }
  }

  public removeQuestion(index) {
    this.questions.splice(index, 1);
  }

  cancel() {
    this.opened = !this.opened;
    this.createSurveyForm.reset();
  }


  public addNewQuestion() {
    this.opened = true;
  }

  saveQuestion() {
    let question: Question = {
      questionNo: this.questions.length,
      title: this.createSurveyForm.controls['title'].value,
      type: this.selectedValue,
      optionalValues: this.optionalValues
    };
    this.questions.push(question);
    this.optionalValues = [];
    this.opened = !this.opened;
    this.createSurveyForm.reset();
    this.survey = {
      emailId: this.authService.currentUserValue,
      surveyName: this.surveyName,
      questionnaire: this.questions
    }
  }

  createSurvey() {

    this.createSurveyService.createSurvey(this.survey).subscribe((res) => {
      console.log("res", res);
      this.questions = [];
      this.surveyName = undefined;
    });

  }

}
