import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '@data/services/api/models/user.model';
import { API_BASE_URL, PROFILE_ENDPOINT } from '@data/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = `${API_BASE_URL}${PROFILE_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  updateUser(userId: string, updatedUserData: UserModel): Observable<UserModel> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<UserModel>(url, updatedUserData);
  }

  registerUser(userData: UserModel): Observable<UserModel> {
    const url = `${API_BASE_URL}/register`;
    return this.http.post<UserModel>(url, userData);
  }

  loginUser(credentials: UserModel): Observable<UserModel> {
    const url = `${API_BASE_URL}/login`;
    return this.http.post<UserModel>(url, credentials);
  }

  getAllUsers(searchTerm: string): Observable<UserModel[]> {
    let url = `${API_BASE_URL}/users`;
    if (searchTerm) {
      url += `?search=${searchTerm}`;
    }
    return this.http.get<UserModel[]>(url);
  }

    getUserById(userId: string): Observable<UserModel> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<UserModel>(url); 
    }
}
