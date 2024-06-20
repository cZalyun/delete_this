import { ChangeDetectionStrategy, Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEntity, UsersStoreModule } from '@angular-advanced-sample/users/store';
import { Store } from '@ngrx/store';
import * as UsersActions from '@angular-advanced-sample/users/store';

@Component({
  selector: 'lib-users-feature',
  standalone: true,
  imports: [CommonModule, UsersStoreModule],
  templateUrl: './users-feature.component.html',
  styleUrl: './users-feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFeatureComponent {
  constructor(private store: Store<UsersEntity>) {
    this.store.dispatch(UsersActions.initUsers());
  }
}
