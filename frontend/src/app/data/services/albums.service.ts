import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, ALBUMS_ENDPOINT } from '@data/constants/constants';
import { AlbumModel } from '@data/services/api/models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
    private apiUrl = `${API_BASE_URL}${ALBUMS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  getAlbumsByUserId(userId: number): Observable<AlbumModel[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<AlbumModel[]>(url);
  }
}