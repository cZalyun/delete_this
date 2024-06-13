import { Route } from '@angular/router';
import { SolidSampleComponent } from './solid-sample/solid-sample.component';
import { SignalSampleComponent } from './signal-sample/signal-sample.component';

export const appRoutes: Route[] = [
  {
    path: 'solid',
    component: SolidSampleComponent
  },
  {
    path: 'signal',
    component: SignalSampleComponent
  }
];
