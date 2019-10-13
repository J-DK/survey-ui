import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'survey-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private authService: AuthService) {
  }

  get show() {
    return this.authService.currentUserValue ? true : false;
  }

  ngOnInit(): void {
    console.log("currentUserValue", this.authService.currentUserValue);
    console.log("currentUser", this.authService.currentUser);
    console.log("currentUserSubject", this.authService.currentUserSubject);

  }

}
