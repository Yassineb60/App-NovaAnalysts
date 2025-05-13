import { Component } from '@angular/core';
import { LitigeService } from '../services/litige.service';

@Component({
  selector: 'app-litige',
  templateUrl: './litige.component.html',
  styleUrls: ['./litige.component.css']
})
export class LitigeComponent {
  statusInput: string = '';
  reasonInput: string = '';
  clusterResult: number | null = null;
  errorMessage: string = '';

  // 🎯 Liste des raisons récupérées depuis ton tableau
  reasonOptions: string[] = [
    'Non-conformité',
    'Livraison en retard',
    'Erreur de facturation',
    'Produit défectueux',
    'Retard de livraison',
    'Montant surfacturé',
    'Erreur de tarification',
    'Marchandises endommagées',
    'Écart de quantité',
    'Duplication de facture',
    'Documentation manquante',
    'Conditions peu claires',
    'Écart de facture',
    'Changements non approuvés',
    'Produit incorrect',
    'Problème de documentation',
    'Montant erroné',
    'Mauvaise qualité',
    'Article non livré',
    'Facture en double',
    'Erreur de stock',
    'Conditions non respectées',
    'Manque de signature',
    'Late delivery',
    'Missing documentation',
    'Invoice duplication',
    'Invoice discrepancy',
    'Incorrect pricing',
    'Overcharged amount',
    'Défaut de conformité',
    'Quantity mismatch',
    'Damaged goods',
    'Unapproved changes',
    'Unclear terms',
    'Livraison incomplète'
  ];

  constructor(private litigeService: LitigeService) {}

  predictCluster() {
    this.errorMessage = '';
    const payload = {
      Status: this.statusInput,
      Reason: this.reasonInput
    };

    this.litigeService.predictLitigeCluster(payload).subscribe({
      next: (response) => {
        this.clusterResult = response.ClusterPrediction;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la prédiction.";
        console.error(error);
      }
    });
  }
}
