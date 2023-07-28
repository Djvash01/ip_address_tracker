import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public googleMapApiLoaded: Observable<boolean>;
 

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService,
  ){
    this.googleMapApiLoaded = this.request.jsonp(this.endpoints.google.maps, 'callback')
    .pipe(
      map((res) => {
        console.log(res);
        return true;
      }),
      catchError(() => of(false))
    )
  }

  ngOnInit(): void {
    
  }
}
