import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class MapComponent implements OnChanges {
  public googleMapApiLoaded: Observable<boolean>;

  @Input() public ipData!: IPData;

  public options: google.maps.MapOptions = {
    zoom: 12,
    disableDefaultUI: true
  };

  public center: google.maps.LatLngLiteral = {lat: 24, lng: 12};


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

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['ipData'].isFirstChange()){
      this.setCoordinates();
    }
  }

  private setCoordinates(): void {
    const { lat, lng } = this.ipData.location;
    this.center = { lat, lng };
  }
}
