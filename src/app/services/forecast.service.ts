import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiUrl = 'http://localhost:5000/api/forecast-errors'; // ajuste si besoin

  constructor(private http: HttpClient) {}

  getForecastErrors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
