import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@data/services/api/models/user.model';
import { ProfileService } from '@data/services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileGetByIdUsecase {
  constructor(private profileService: ProfileService) {}

  execute(userId: string): Observable<UserModel> {
    return this.profileService.getUserById(userId);
  }
}
