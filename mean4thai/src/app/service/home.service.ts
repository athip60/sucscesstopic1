import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = 'http://localhost:4040/api/review';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  getReviews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  deleteReview(data: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${data}`, this.httpOptions);
  }
}
