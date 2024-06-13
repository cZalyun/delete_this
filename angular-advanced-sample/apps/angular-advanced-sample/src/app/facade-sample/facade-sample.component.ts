import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DummyUsersService } from '@angular-advanced-sample/shared-utils';

@Component({
  selector: 'app-facade-sample',
  standalone: true,
  imports: [CommonModule, HttpClient, DummyUsersService],
  templateUrl: './facade-sample.component.html',
  styleUrl: './facade-sample.component.css',
})
export class FacadeSampleComponent {
}
