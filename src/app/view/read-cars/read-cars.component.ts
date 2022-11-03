import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from 'src/app/shared/models/car.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-cars',
  templateUrl: './read-cars.component.html',
  styleUrls: ['./read-cars.component.css'],
})
export class ReadCarsComponent implements OnInit {
  carsList: Car[] = [];
  isLogged!: boolean;
  constructor(
    private http: HttpServiceService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCars();
  }
  onDelete(carItem: Car) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((res) => {
      if (res.isConfirmed) {
        this.http.deleteCar(carItem.id).subscribe((res) => {
          if (res) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.getAllCars();
          }
        });
      }
    });
  }
  onUpdate(carItem: Car) {
    this.router.navigate([`update/${carItem.id}`]);
  }

  getAllCars() {
    this.http.readAllCars().subscribe((res) => {
      if (res) {
        this.carsList = res;
        this.isLogged = this.auth.isUserLogedIn();
      }
    });
  }
}
