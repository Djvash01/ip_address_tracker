import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPData } from '@models/ip-data.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  public googleMapApiLoaded: Observable<boolean>;

  @Input() public ipData!: IPData;


  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService
  ) {
    this.googleMapApiLoaded = this.request
      .jsonp(this.endpoints.google.maps, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  public ngOnInit(): void {}
}
