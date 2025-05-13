import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LitigeService {
  private apiUrl = 'http://localhost:5000/api';  // URL de ton backend Flask

  constructor(private http: HttpClient) {}

  // 🔥 Prédire le cluster d'un litige
  predictLitigeCluster(data: { Status: string, Reason: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cluster-litige`, data);
  }
}
