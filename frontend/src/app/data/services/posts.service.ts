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

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}