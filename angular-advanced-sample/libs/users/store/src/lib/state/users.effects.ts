import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, mergeMap, map } from 'rxjs';
import { UserResponse } from '@angular-advanced-sample/dummy/model';
import * as UsersActions from './users.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);

  constructor(private http: HttpClient) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.initUsers),
      mergeMap(() => this.http.get<UserResponse>('https://dummyjson.com/users').pipe(
        map((usersResponse: UserResponse) => UsersActions.loadUsersSuccess({users: usersResponse.users}))
      )),
      catchError(error => {
        console.error('Error', error);
        return of(UsersActions.loadUsersFailure({ error }));
      }),
    ),
  );
}
