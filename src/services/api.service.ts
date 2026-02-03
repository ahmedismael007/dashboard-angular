import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  index<R>(route: string) {
    return this.http.get<R>(`${this.apiUrl}/${route}`, {
      withCredentials: true,
    });
  }

  store<T, R>(route: string, data: T) {
    return this.http.post<R>(`${this.apiUrl}/${route}`, data, {
      withCredentials: true,
    });
  }

  show<R>(route: string, id: number | string) {
    return this.http.get<R>(`${this.apiUrl}/${route}/${id}`, {
      withCredentials: true,
    });
  }

  update<T, R>(route: string, id: number | string, data: T) {
    return this.http.put<R>(`${this.apiUrl}/${route}/${id}`, data, {
      withCredentials: true,
    });
  }

  destroy<R>(route: string, data: number[] | string[]) {
    return this.http.delete<R>(`${this.apiUrl}/${route}`, {
      body: data,
      withCredentials: true,
    });
  }
}
