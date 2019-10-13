import { Component, OnInit } from '@angular/core';
import { AuthService } from './features/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'survey-ui';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  get show() {
    return this.authService.currentUserValue ? true : false;
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
    window.location.reload();
  }

}
