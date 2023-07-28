import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { IPData } from '@models/ip-data.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent {
  private ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/;
  public search = new FormControl('', [Validators.maxLength(15), Validators.required, Validators.pattern(this.ipv4Regex)]);

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService,
  ){}


  searchIp(){
    if(this.search.invalid) return;

    const httpParams = new HttpParams().appendAll({
      apiKey: environment.ipifyApiKey,
      ipAddress: this.search.value!
    })
    this.request.get<IPData>(this.endpoints.ipify.api, httpParams).subscribe((res) => {
      console.log(res);
    })
  }

}
