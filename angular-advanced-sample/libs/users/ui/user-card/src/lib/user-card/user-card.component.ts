import { Component, InputSignal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-advanced-sample/users/models';
import { ButtonComponent } from '@angular-advanced-sample/users/ui/button';

@Component({
  selector: 'lib-user-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  public user: InputSignal<User | undefined> = input<User>();

  public deleteButtonClicked(): void {
    console.log('Delete button clicked');
  }

  public detailsButtonClicked(): void {
    console.log('Details button clicked');
  }
}
