import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {

  constructor(private http: HttpClient) {
  }

  public createSurvey(survey: Survey): Observable<any> {
    return this.http.post('http://localhost:3000/surveys', survey);
  }
}
