import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  baseUrl = 'http://ngglobal.somee.com/api/Cars';
  constructor(private httpService: HttpClient) {}

  readAllCars(): Observable<any> {
    return this.httpService.get(this.baseUrl);
  }
  createCar(carItem: Car) {
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.httpService.post(this.baseUrl, carItem, { headers: headers });
  }
  deleteCar(carId: string) {
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.httpService.delete(`${this.baseUrl}/${carId}`, {
      headers: headers,
    });
  }
  updateCarItem(carId: string, carItem: any): Observable<any> {
    let apiUrl: string = `${this.baseUrl}/${carId}`;
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.httpService.put(apiUrl, carItem, { headers: headers });
  }
  getById(carId: string): Observable<any> {
    let apiUrl: string = `${this.baseUrl}/${carId}`;
    return this.httpService.get(apiUrl);
  }
}
