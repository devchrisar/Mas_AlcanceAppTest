import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faFaceGrinHearts, faRetweet } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})

export class PostModalComponent {
  isOpen = false;
  posts: any[] = [];
  faComment = faComment;
  faFaceGrinHearts = faFaceGrinHearts;
  faRetweet = faRetweet;

  openModal(posts: any[]): void {
    this.posts = posts;
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }
}
