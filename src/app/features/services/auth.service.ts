import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginUser, SignupUser } from '../models/model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  login(loginUser: LoginUser): Observable<any> {
    return this.http.post( `https://survey-shrike.herokuapp.com/survey-service/api/v1/login`, loginUser)
      .pipe(map((response: any) => {
          this.setLocalStorage(response.email);
        return response;
      }));
  }

  register(user: SignupUser): Observable<any> {
    return this.http.post("https://survey-shrike.herokuapp.com/survey-service/api/v1/register", user)
      .pipe(tap((response: any) => {
        console.log("response", response);
          this.setLocalStorage(response.email);
      }));
  }

  setLocalStorage(email: string) {
    // store user details in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', window.btoa(email));
    this.currentUserSubject.next(email);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
