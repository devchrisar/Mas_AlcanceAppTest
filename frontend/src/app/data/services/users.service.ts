//? con esto se hace la conexion con el backend para obtener los datos de los usuarios

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, USERS_ENDPOINT } from '@data/constants/constants';
import { UserModel } from '@data/services/api/models/user.model';
import { ExternalUserModel } from '@data/services/api/models/external-users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = `${API_BASE_URL}${USERS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<ExternalUserModel[]> {
    return this.http.get<ExternalUserModel[]>(this.apiUrl);
  }

  getUserBySearch(search: string): Observable<UserModel[]> {
    const url = `${this.apiUrl}?search=${search}`;
    return this.http.get<UserModel[]>(url);
  }
}
