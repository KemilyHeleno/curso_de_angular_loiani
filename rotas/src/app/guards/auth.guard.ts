import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean> | boolean {

    if (this.AuthService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
