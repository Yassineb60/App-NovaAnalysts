import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RevenueService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  predictRevenue(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/predict-revenue`, data);
  }
}
