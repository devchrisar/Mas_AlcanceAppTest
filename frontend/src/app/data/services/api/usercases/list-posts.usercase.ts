import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '@data/services/posts.service';

@Injectable({
  providedIn: 'root',
})
export class ListPostsUsecase {
  constructor(private postsService: PostsService) {}

  execute(userId: number): Observable<any[]> {
    return this.postsService.getPosts(userId);
  }
}
