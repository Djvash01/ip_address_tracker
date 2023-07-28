import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private readonly http: HttpClient) {}

  public jsonp(url: string, callbackParam: string): Observable<Object> {
    return this.http.jsonp(url, callbackParam);
  }
}
