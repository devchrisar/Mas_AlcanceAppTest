import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, POSTS_ENDPOINT } from '@data/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = `${API_BASE_URL}${POSTS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  //? se obtienen los posts de un usuario en especifico por medio de su id
  getPosts(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<any[]>(url);
  }
}
