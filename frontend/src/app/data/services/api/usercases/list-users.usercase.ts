//? Aca se crean los casos de uso para obtener una lista de usuarios
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '@data/services/users.service';

@Injectable({
  providedIn: 'root',
})
export class ListUsersUsecase {
  constructor(private usersService: UsersService) {}

  execute(): Observable<any[]> {
    return this.usersService.getAllUsers();
  }
}
