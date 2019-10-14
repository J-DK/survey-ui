import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack, Survey } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  saveResponse(response: FeedBack) {
    return this.http.post('http://localhost:3000/responses', response);
  }

  getResponses(): Observable<any> {
    return this.http.get('http://localhost:3000/responses');
  }

  getSurvey(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/surveys/${id}`);
  }

  createSurvey(survey: Survey): Observable<any> {
    return this.http.post('https://survey-shrike.herokuapp.com/survey-service/api/v1/surveys', survey);
  }

  getMySurveys(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/surveys');
  }
}
