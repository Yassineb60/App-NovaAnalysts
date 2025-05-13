// forecast-errors.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast-errors',
  templateUrl: './forecast-errors.component.html',
  styleUrls: ['./forecast-errors.component.css']
})
export class ForecastErrorsComponent implements OnInit {
  forecastData: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/api/forecast-errors')
      .subscribe({
        next: (data) => {
          this.forecastData = data.forecast || data; // selon le format
          this.loading = false;
        },
        error: (err) => {
          console.error('❌ Erreur de chargement des données :', err);
          this.loading = false;
        }
      });
  }
}
