import { Route } from '@angular/router';
import { SolidSampleComponent } from './solid-sample/solid-sample.component';
import { SignalSampleComponent } from './signal-sample/signal-sample.component';
import { FacadeSampleComponent } from './facade-sample/facade-sample.component';
import { WsChatRxjsComponent } from './ws-chat-rxjs/ws-chat-rxjs.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { UsersFeatureComponent } from '@angular-advanced-sample/users/feature';
import * as fromUsers from '@angular-advanced-sample/users/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from 'libs/users/store/src/lib/state/users.effects';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/facade',
    pathMatch: 'full'
  },
  {
    path: 'solid',
    component: SolidSampleComponent
  },
  {
    path: 'signal',
    component: SignalSampleComponent
  },
  {
    path: 'facade',
    component: FacadeSampleComponent,
    providers: [
      provideState('users', fromUsers.usersReducer),
      provideEffects(UsersEffects)
    ]
  },
  {
    path: 'chat',
    component: WsChatRxjsComponent
  }
];
