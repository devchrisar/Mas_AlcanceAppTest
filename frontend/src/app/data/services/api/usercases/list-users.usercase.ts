//? Aca se crean los casos de uso para obtener una lista de usuarios
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '@data/services/users.service';
import { ExternalUserModel } from '@data/services/api/models/external-users.model';

@Injectable({
  providedIn: 'root',
})
export class ListUsersUsecase {
  constructor(private usersService: UsersService) {}

  execute(): Observable<ExternalUserModel[]> {
    return this.usersService.getAllUsers();
  }
}
