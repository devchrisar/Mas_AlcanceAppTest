import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '@data/services/api/models/post.model';
import { PostsService } from '@data/services/posts.service';

@Injectable({
  providedIn: 'root',
})
export class GetAllPostsUseCase {
  constructor(private postsService: PostsService) {}

  execute(): Observable<PostModel[]> {
    return this.postsService.getAllPosts();
  }
}
