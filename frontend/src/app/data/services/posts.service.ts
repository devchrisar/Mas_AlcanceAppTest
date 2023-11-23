import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, POSTS_ENDPOINT } from '@data/constants/constants';
import { PostModel } from '@data/services/api/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = `${API_BASE_URL}${POSTS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  //? se obtienen los posts de un usuario en especifico por medio de su id
  getPostsById(userId: number): Observable<PostModel[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<PostModel[]>(url);
  }

  //? se obtienen todos los posts
  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl);
  }
}
