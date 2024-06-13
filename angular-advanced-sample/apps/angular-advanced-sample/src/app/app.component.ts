import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolidSampleComponent } from './solid-sample/solid-sample.component';

@Component({
  standalone: true,
  imports: [RouterModule, SolidSampleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-advanced-sample';
}
