import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnomalyService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all-products`);
  }

  getAnomalies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/anomalies`);
  }

  checkProduct(product: { Price: number; ReviewScore: number; ReviewCount: number }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/check-product`, product);
  }
}
