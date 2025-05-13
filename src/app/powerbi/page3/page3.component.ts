import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  powerBIUrl: string = 'https://app.powerbi.com/reportEmbed?reportId=4a793848-7d28-44b3-8e33-ddb83e58ae12&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=de41622e71e925df9422&navContentPaneEnabled=false&filterPaneEnabled=false';

      constructor(private router: Router) {}
      goBack(): void {
        this.router.navigate(['/dashboards-home']); // Ou '/home', selon ta route
      }

}
