import { Component } from '@angular/core';
import { DelayService } from '../../services/delay.service';

@Component({
  selector: 'app-predict-delay',
  templateUrl: './predict-delay.component.html',
  styleUrls: ['./predict-delay.component.css']
})
export class PredictDelayComponent {
  formData: Record<string, number> = {
    Amount: 0,
    DiscountOffered: 0,
    DiscountUsed: 0,
    DaysToPay: 0,
    DayOfWeek: 1,
    WeekOfYear: 1,
    IsWeekend: 0,
    Month: 1,
    Quarter: 1,
    SupplierID: 1
  };

  result: any = null;
  error: string = '';
  objectKeys = Object.keys;

  // 🔥 Options pour les listes déroulantes
  dayOfWeekOptions = [1, 2, 3, 4, 5, 6, 7];
  monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private delayService: DelayService) {}

  onSubmit() {
    console.log("📤 Données envoyées :", this.formData);

    this.delayService.predictDelay(this.formData).subscribe({
      next: res => {
        console.log("✅ Réponse reçue :", res);
        this.result = res;
        this.error = '';
      },
      error: err => {
        console.error("❌ Erreur API :", err);
        this.error = err.error?.error || 'Erreur inconnue';
        this.result = null;
      }
    });
  }
}
