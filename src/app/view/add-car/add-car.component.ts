import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  constructor(private http: HttpServiceService, private router: Router) {}

  ngOnInit(): void {}
  onFormSubmit(form: NgForm) {
    this.http.createCar(form.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['']);
      }
    });
  }
}
