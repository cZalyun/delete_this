import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// This usually a complex library with a lot of dependencies and functions
export class DummyUsersService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
