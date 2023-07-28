import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private readonly http: HttpClient) {}

  public get<T>(url: string, params?: HttpParams): Observable<T>{
    return this.http.get<T>(url, { params })
  }

  public jsonp(url: string, callbackParam: string): Observable<Object> {
    return this.http.jsonp(url, callbackParam);
  }
}
