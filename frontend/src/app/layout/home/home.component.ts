import { Component, OnInit, Injector } from '@angular/core';
import { ListUsersUsecase } from '@app/data/services/api/usercases/list-users.usercase';
import { CommonModule } from '@angular/common';
import { UsersService } from '@data/services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    //? se llama al caso de uso para listar usuarios despues de que se halla recibido la respuesta del servicio de usuarios
    const listUsersUsecase = new ListUsersUsecase(
      this.injector.get(UsersService),
    );
    listUsersUsecase.execute().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users: ', this.users);
      },
      error: (error) => {
        console.log('Error fetching users: ', error);
      },
    });
  }

  onClick(user: any): void {
    user.hover = false;
  }
}
