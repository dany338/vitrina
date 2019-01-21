import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../app/models/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private api = 'http://buitragoyasociados.co/vitrinaapi/api/web/v1';
  public Cars: Car[];
  constructor(private http: HttpClient) { }
}
