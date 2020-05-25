import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private _httpClient : HttpClient) { }

  baseUrl = 'http://localhost:3000/employees';

  uploadFile(file: File): Observable<File> {
    return this._httpClient.post<File>(this.baseUrl, file, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    // .pipe(catchError(this.handleError));
  };

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //       console.error('Client Side Error: ', errorResponse.error.message);
  //   } else {
  //       console.error('Server Side Error: ', errorResponse);
  //   }
  //   return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
  // }
}
