import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Needed for *ngIf

@Component({
  selector: 'app-register',
  standalone: true,  // Required for standalone components
  imports: [CommonModule, FormsModule, RouterModule],  // ✅ Add these here
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="user.email" name="email" placeholder="Email" required />
      <input [(ngModel)]="user.password" name="password" placeholder="Password" required type="password" />
      <button type="submit">Register</button>
    </form>
    <p *ngIf="error">{{error}}</p>
  `
})
export class RegisterComponent {
  user = { email: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (this.auth.register(this.user)) {
      this.router.navigate(['/login']);
    } else {
      this.error = 'User already exists!';
    }
  }
}
