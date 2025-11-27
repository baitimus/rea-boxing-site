import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;
  showEmailError = false;
  showPasswordError = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeGoogleSignIn();
    }
  }

  initializeGoogleSignIn(): void {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) => this.handleGoogleSignIn(response)
      });
      google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large', width: 250 }
      );
    } else {
      setTimeout(() => this.initializeGoogleSignIn(), 100);
    }
  }

  handleGoogleSignIn(response: any): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.googleSignIn(response.credential)
      .subscribe({
        next: (result) => {
          console.log('Google sign-in successful:', result);
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Google sign-in error:', error);
          this.errorMessage = this.getErrorMessage(error);
          this.isLoading = false;
        }
      });
  }

  onSubmit(): void {
    // Reset error states
    this.showEmailError = false;
    this.showPasswordError = false;
    this.errorMessage = '';

    // Validate fields
    if (!this.email || !this.isValidEmail(this.email)) {
      this.showEmailError = true;
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    if (!this.password) {
      this.showPasswordError = true;
      this.errorMessage = 'Please enter your password';
      return;
    }

    this.isLoading = true;

    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = this.getErrorMessage(error);
          this.isLoading = false;
        }
      });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private getErrorMessage(error: any): string {
    if (error.error?.message) {
      const message = error.error.message;
      
      // Customize error messages for better UX
      if (message.includes('Invalid email or password')) {
        return 'Invalid email or password. Please check your credentials and try again.';
      }
      if (message.includes('User not found')) {
        return 'No account found with this email. Please register first.';
      }
      if (message.includes('Google sign-in failed')) {
        return 'Google sign-in failed. Please try again or use email login.';
      }
      
      return message;
    }
    
    if (error.status === 401) {
      return 'Invalid email or password. Please check your credentials.';
    }
    if (error.status === 500) {
      return 'Server error. Please try again later.';
    }
    if (error.status === 0) {
      return 'Cannot connect to server. Please check your internet connection.';
    }
    
    return 'Login failed. Please try again.';
  }
}
