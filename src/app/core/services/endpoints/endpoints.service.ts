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
    api: 'https://geo.ipify.org/api/v2/country,city'
  } as const;
}
