import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component {
  powerBIUrl: string = 'https://app.powerbi.com/reportEmbed?reportId=4a793848-7d28-44b3-8e33-ddb83e58ae12&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=7fb8b770ac87decf9998&navContentPaneEnabled=false&filterPaneEnabled=false';

  constructor(private router: Router) {}
  goBack(): void {
    this.router.navigate(['/dashboards-home']); // Ou '/home', selon ta route
  }

}
