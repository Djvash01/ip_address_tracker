import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPData } from '@models/ip-data.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent {

  @Input() public ipData?: IPData;

}
