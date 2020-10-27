import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baseUrl = 'http://localhost:4040/api/review';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  postReview(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(data), this.httpOptions);
  }
}
