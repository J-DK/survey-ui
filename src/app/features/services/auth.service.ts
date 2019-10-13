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
    return this.http.get( `http://localhost:3000/users?email=${loginUser.email}&password=${loginUser.password}`)
      .pipe(map((response: any) => {
          this.setLocalStorage(response[0].firstName);
        return response;
      }));
  }

  register(user: SignupUser): Observable<any> {
    return this.http.post("http://localhost:3000/users", user)
      .pipe(tap((response: any) => {
          this.setLocalStorage(response.firstName);
      }));
  }

  setLocalStorage(email: string) {
    // store user details in local storage to keep user logged in between page refreshes
    // let user = window.btoa(email + ':' + userName);
    localStorage.setItem('currentUser', email);
    this.currentUserSubject.next(email);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
