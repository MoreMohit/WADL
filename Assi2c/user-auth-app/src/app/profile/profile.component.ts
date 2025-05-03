import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // 👈 Required for *ngIf
  template: `
    <h2>Profile</h2>
    <div *ngIf="user">
      <p>Email: {{user.email}}</p>
    </div>
  `
})
export class ProfileComponent {
  user: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }
}
