import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, ALBUMS_ENDPOINT } from '@data/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
    private apiUrl = `${API_BASE_URL}${ALBUMS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  getAlbumsByUserId(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<any[]>(url);
  }
}