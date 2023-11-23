//? con esto se hace la conexion con el backend para obtener los datos de los usuarios

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, USERS_ENDPOINT } from '@data/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = `${API_BASE_URL}${USERS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(userId: string, updatedUserData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}`, updatedUserData);
  }
}
