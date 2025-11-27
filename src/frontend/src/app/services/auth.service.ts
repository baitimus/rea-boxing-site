import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, data)
      .pipe(
        tap(response => this.handleAuthSuccess(response))
      );
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, data)
      .pipe(
        tap(response => this.handleAuthSuccess(response))
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired(token);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getProfile(): Observable<{ user: User }> {
    return this.http.get<{ user: User }>(`${environment.apiUrl}/auth/profile`);
  }

  private handleAuthSuccess(response: AuthResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp;
      return expiry ? (Math.floor(Date.now() / 1000)) >= expiry : false;
    } catch {
      return true;
    }
  }
}
