import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEntity, UsersStoreModule } from '@angular-advanced-sample/users/store';
import { Store } from '@ngrx/store';
import * as UsersActions from '@angular-advanced-sample/users/store';
import { User } from '@angular-advanced-sample/users/models';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { UserCardComponent } from '@angular-advanced-sample/users/ui/user-card';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'lib-users-feature',
  standalone: true,
  imports: [CommonModule, UsersStoreModule, UserCardComponent, MatDialogModule],
  templateUrl: './users-feature.component.html',
  styleUrl: './users-feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFeatureComponent {
  constructor(private store: Store<UsersEntity>) {
    this.store.dispatch(UsersActions.initUsers());
  }

  // With signals: You do not need to handle subscriptions and unsubscriptions, signals will do the work in the background
  public users: Signal<User[] | undefined> = toSignal(this.store.select(UsersActions.selectAllUsers));

  // With pure rxjs: Manual (un)subscriptions, if you use | async pipe in the template => x async pipe === x subscriptions
  public users$: Observable<User[] | undefined> = this.store.select(UsersActions.selectAllUsers);

  public deleteClickHandler(userId: number): void {
    console.log('Delete button has been pressed for this user: ', userId);
  }

  public detailsClickHandler(userId: number): void {
    console.log('Details button has been pressed for this user: ', userId)
  }
}
