import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DelayService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  predictDelay(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/check-delay`, data);
  }
}
