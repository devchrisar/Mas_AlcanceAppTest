import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '@data/services/posts.service';
import { PostModel } from '@data/services/api/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class ListPostsByidUsecase {
  constructor(private postsService: PostsService) {}

  execute(userId: number): Observable<PostModel[]> {
    return this.postsService.getPostsById(userId);
  }
}
