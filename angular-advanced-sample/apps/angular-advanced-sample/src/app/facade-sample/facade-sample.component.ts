import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyUserFacadeService } from './dummy-user-facade.service';
import { User } from '@angular-advanced-sample/shared-utils';

@Component({
  selector: 'app-facade-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facade-sample.component.html',
  styleUrl: './facade-sample.component.css',
})
export class FacadeSampleComponent {
  public users: WritableSignal<User[]> = signal([]);
  constructor(private usersFacade: DummyUserFacadeService) {
    this.loadUsers();
  }

  private async loadUsers(): Promise<void> {
    this.users.set(await this.usersFacade.getUsersWithGreenEye());
  }
}
