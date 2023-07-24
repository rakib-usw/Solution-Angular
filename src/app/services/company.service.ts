import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

  adCompany(data: any) {
    this._http.post('http://localhost:3000/comapany', data);
  }
}
