import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'jwt_token';

  login(username: string, password: string): Observable<boolean> {
    // In a real app, you'd send a request to a server.
    if (username === '1' && password === '1') {
      return of(true).pipe(
        delay(1000), // Simulate network latency
        tap(() => this.storeToken('fake-jwt-token-for-user'))
      );
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }
}