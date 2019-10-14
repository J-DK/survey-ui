import { Component } from '@angular/core';
import { AuthService } from './features/services/auth.service';

@Component({
  selector: 'survey-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'survey-ui';

  constructor(private authService: AuthService) {
  }

  get show() {
    return this.authService.currentUserValue ? true : false;
  }

  logOut() {
    this.authService.logout();
    window.location.reload();
  }

}
