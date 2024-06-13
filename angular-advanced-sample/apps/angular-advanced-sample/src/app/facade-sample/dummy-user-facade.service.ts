import { Injectable } from '@angular/core';
import { DummyUsersService, User } from '@angular-advanced-sample/shared-utils';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyUserFacadeService {
  constructor(private dummyUserService: DummyUsersService) {}

  public async getUsersWithGreenEye(): Promise<User[]> {
    const users: User[] = await firstValueFrom(this.dummyUserService.getData());
    return users.filter((user: User) => user.eyeColor === 'Green');
  }
}
