import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class MySurveysService {

  constructor(private http: HttpClient) {
  }

  public getMySurveys(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/surveys');
  }
}
