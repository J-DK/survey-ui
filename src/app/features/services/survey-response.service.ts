import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SurveyResponseService {

  constructor(private http: HttpClient) { }

  saveResponse(response: FeedBack) {
    return this.http.post('http://localhost:3000/responses', response);
  }

  getResponses(): Observable<any> {
    return this.http.get('http://localhost:3000/responses');
  }
}
