import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  baseUrl = 'http://localhost:4040/api/review';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getReviewsById(_id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }

  putUpdate(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${data._id}`, data);
  }
}
