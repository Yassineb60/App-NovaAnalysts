import { Component } from '@angular/core';
import { RevenueService } from '../../services/revenue.service';

@Component({
  selector: 'app-predict-revenue',
  templateUrl: './predict-revenue.component.html',
  styleUrls: ['./predict-revenue.component.css']
})
export class PredictRevenueComponent {
  formData: any = {
    Valeur_des_Actifs: 0,
    Amortissement_Cumulé: 0,
    Coût_de_Maintenance: 0,
    Investissement_dans_les_Actifs: 0,
    TotalAssets: 0,
    TotalLiabilities: 0,
    Equity: 0,
    Budget: 0,
    ActualExpenses: 0,
    year: 2025
  };

  result: number | null = null;
  error: string = '';
  objectKeys = Object.keys;

  constructor(private revenueService: RevenueService) {}

  onSubmit() {
    this.revenueService.predictRevenue(this.formData).subscribe({
      next: res => {
        this.result = res.prediction;
        this.error = '';
      },
      error: err => {
        this.error = err.error?.error || 'Erreur inconnue';
        this.result = null;
      }
    });
  }
}
