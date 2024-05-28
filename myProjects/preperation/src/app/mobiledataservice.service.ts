import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMobile } from './imobile';

@Injectable({
  providedIn: 'root'
})
export class MobiledataserviceService {

  private _url: string = "https://api.restful-api.dev/objects";

  constructor(private http: HttpClient) { 
    this.ngOnInit();
  }

  ngOnInit() {
    this.getMobileData();
  }

  getMobileData(): Observable<IMobile[]> {
    return this.http.get<IMobile[]>(this._url)
  }
}
