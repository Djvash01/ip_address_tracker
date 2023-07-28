import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public readonly google = {
    maps: `${environment.googleMapsUrl}?key=${environment.googleMapsApiKey}`
  } as const;

  public readonly ipify = {
    geo: environment.geoIpifyUrl,
    api: environment.apiIpifyUrl,
  } as const;
}
