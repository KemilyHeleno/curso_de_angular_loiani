import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean> | boolean {
    console.log('AuthGuard')

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> {
    console.log('canLoad: Verificando se usuário pode carregar o cod módulo')
    return this.verificarAcesso();
  }

  private verificarAcesso(): Observable<boolean> {
    if (this.authService.usuarioEstaAutenticado()) {
      return of(true);
    }

    this.router.navigate(['/login']);
    return of(false);
  }
}
