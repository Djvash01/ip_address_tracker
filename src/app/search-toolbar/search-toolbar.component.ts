import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { IPData } from '@models/ip-data.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchToolbarComponent implements OnInit {
  private ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/;
  public search = new FormControl('', [
    Validators.maxLength(15),
    Validators.required,
    Validators.pattern(this.ipv4Regex),
  ]);
  public thereIsError = false;

  @Output()
  public ipData = new EventEmitter<IPData>();

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService
  ) {}

  public ngOnInit(): void {
    this.getUserIp();
  }

  private getUserIp(): void {
    this.request.get<{ip: string}>(this.endpoints.ipify.api).subscribe(( res ) => {
      this.getIpData(res.ip);
    });
  }

  public searchIp() {
    if (this.search.invalid) return;
    this.getIpData(this.search.value!);
  }

  private getIpData(ipAddress: string): void {
    this.thereIsError = false;
    const httpParams = new HttpParams().appendAll({
      apiKey: environment.ipifyApiKey,
      ipAddress,
    });
    this.request.get<IPData>(this.endpoints.ipify.geo, httpParams).subscribe({
      next: (data) => {
        this.ipData.emit(data);
      },
      error: () => {
        this.thereIsError = true;
      },
    });
  }
}
