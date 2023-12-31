import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@data/services/api/models/user.model';
import { ProfileService } from '@data/services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileUpdateUsecase {
  constructor(private profileService: ProfileService) {}

  execute(userId: string, updatedUserData: UserModel): Observable<UserModel> {
    return this.profileService.updateUser(userId, updatedUserData);
  }
}
