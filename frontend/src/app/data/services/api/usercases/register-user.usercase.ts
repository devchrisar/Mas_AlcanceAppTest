import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@data/services/api/models/user.model';
import { ProfileService } from '@data/services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileRegisterUsecase {
  constructor(private profileService: ProfileService) {}

  execute(userData: UserModel): Observable<UserModel> {
    return this.profileService.registerUser(userData);
  }
}
