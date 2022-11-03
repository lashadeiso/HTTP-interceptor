import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onAuthFromSubmit(authForm: NgForm) {
    this.auth.inOrNot.emit(true);
    this.auth.logInUser(authForm.value);
    Swal.fire('Success');
    this.router.navigate(['']);
    authForm.reset();
  }
}
