import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  email = '';
  password = '';
  firstName = '';
  lastName = '';
  errorMessage = '';
  isLoading = false;
  showEmailError = false;
  showPasswordError = false;
  showFirstNameError = false;
  showLastNameError = false;

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
    this.showFirstNameError = false;
    this.showLastNameError = false;
    this.showEmailError = false;
    this.showPasswordError = false;
    this.errorMessage = '';

    // Validate all fields
    let hasError = false;

    if (!this.firstName || this.firstName.trim().length === 0) {
      this.showFirstNameError = true;
      hasError = true;
    }

    if (!this.lastName || this.lastName.trim().length === 0) {
      this.showLastNameError = true;
      hasError = true;
    }

    if (!this.email || !this.isValidEmail(this.email)) {
      this.showEmailError = true;
      hasError = true;
    }

    if (!this.password || this.password.length < 6) {
      this.showPasswordError = true;
      hasError = true;
    }

    if (hasError) {
      this.errorMessage = 'Please fix the errors above';
      return;
    }

    this.isLoading = true;

    this.authService.register({ 
      email: this.email, 
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Registration error:', error);
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
      if (message.includes('User already exists') || message.includes('already exists with this email')) {
        return 'An account with this email already exists. Please login instead.';
      }
      if (message.includes('Please provide all required fields')) {
        return 'Please fill in all required fields.';
      }
      if (message.includes('Google sign-in failed')) {
        return 'Google sign-in failed. Please try again or use email registration.';
      }
      
      return message;
    }
    
    if (error.status === 400) {
      return 'Invalid registration data. Please check your information.';
    }
    if (error.status === 500) {
      return 'Server error. Please try again later.';
    }
    if (error.status === 0) {
      return 'Cannot connect to server. Please check your internet connection.';
    }
    
    return 'Registration failed. Please try again.';
  }
}
