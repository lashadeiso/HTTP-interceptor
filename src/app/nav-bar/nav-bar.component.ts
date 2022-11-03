import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { HttpServiceService } from '../shared/services/http-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  signTitle = 'Sign In';
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.inOrNot.subscribe((res) => {
      if (res) {
        this.signTitle = 'Sign Out';
      }
    });
  }
  onLogInLogOut() {
    if (this.auth.isUserLogedIn()) {
      this.auth.logInUser(null);
      this.router.navigate(['/auth']);
      this.signTitle = 'Sign In';
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
