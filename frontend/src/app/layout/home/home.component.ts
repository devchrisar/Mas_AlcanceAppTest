import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '@data/services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostModalComponent } from '@layout/modal/post-modal/post-modal.component';
import { ListUsersUsecase } from '@app/data/services/api/usercases/list-users.usercase';
import { ListPostsUsecase } from '@app/data/services/api/usercases/list-posts.usercase';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PostModalComponent],
  providers: [HttpClient],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  //? se obtiene la instancia del componente modal para poder abrirlo desde el componente padre (home)
  @ViewChild(PostModalComponent, { static: false })
  postModal!: PostModalComponent;
  constructor(
    private listUsersUsecase: ListUsersUsecase,
    private userService: UsersService,
    private listPostsUsecase: ListPostsUsecase,
  ) {}

  ngOnInit(): void {
    //? se llama al caso de uso para listar usuarios despues de que se halla recibido la respuesta del servicio de usuarios

    this.listUsersUsecase.execute().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users: ', this.users);
      },
      error: (error) => {
        console.log('Error fetching users: ', error);
      },
    });
  }

  onClick(userId: number): void {
    this.listPostsUsecase.execute(userId).subscribe({
      next: (posts) => {
        // Pasa los posts al modal y abre el modal
        this.postModal.openModal(posts);
      },
      error: (error) => {
        console.log('Error fetching posts: ', error);
      },
    });
  }
}
