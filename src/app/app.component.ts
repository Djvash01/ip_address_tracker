import { Component } from '@angular/core';
import { IPData } from '@models/ip-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data?: IPData;
  

  public handlerData(data: IPData): void {
    this.data = data;
  }
}
