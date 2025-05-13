import { Component, OnInit } from '@angular/core';
import { AnomalyService } from '../../services/anomaly.service';

@Component({
  selector: 'app-anomaly-viewer',
  templateUrl: './anomaly-viewer.component.html',
})
export class AnomalyViewerComponent implements OnInit {
  products: any[] = [];
  showAnomaliesOnly: boolean = false;
  displayLimit = 10;

  // Formulaire
  productInput = {
    Price: 0,
    ReviewScore: 0,
    ReviewCount: 0
  };
  modelResult: any = null;

  constructor(private anomalyService: AnomalyService) {}

  ngOnInit() {
    this.loadAllProducts();
  }

  get displayedProducts() {
    return this.products.slice(0, this.displayLimit);
  }

  loadAllProducts() {
    this.anomalyService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadAnomalies() {
    this.anomalyService.getAnomalies().subscribe(data => {
      this.products = data;
    });
  }

  toggleView() {
    this.showAnomaliesOnly = !this.showAnomaliesOnly;
    this.displayLimit = 10;
    this.showAnomaliesOnly ? this.loadAnomalies() : this.loadAllProducts();
  }

  loadMore() {
    this.displayLimit += 10;
  }

  checkProductAnomaly() {
    this.anomalyService.checkProduct(this.productInput).subscribe(result => {
      this.modelResult = result;
    });
  }
}
