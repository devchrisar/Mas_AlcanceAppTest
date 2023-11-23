import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComment,
  faFaceGrinHearts,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FindAlbumByidUsecase } from '@app/data/services/api/usercases/find-albumByid.usercase';
import { PostModel } from '@app/data/services/api/models/post.model';

@Component({
  selector: 'app-post-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent {
  isOpen = false;
  posts: PostModel[] = [];
  userId: number | null = null;
  faComment = faComment;
  faFaceGrinHearts = faFaceGrinHearts;
  faRetweet = faRetweet;

  //? se obtiene la instancia del router para poder redirigir a la ruta de albums y el caso de uso para obtener el album por id
  constructor(
    private router: Router,
    private findAlbumByIdUsecase: FindAlbumByidUsecase
  ) {}

  openModal(posts: PostModel[], userId: number): void {
    this.posts = posts;
    this.userId = userId;
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }

  goToAlbum(): void {
    if (this.userId !== null) {
      this.router.navigate(['/albums'], { queryParams: { userId: this.userId.toString() } });
    }
  }
}
