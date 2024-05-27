import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from './student';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SurtestService {

  private dataUrl: string = "/assets/data/data.json";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.dataUrl);
  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
