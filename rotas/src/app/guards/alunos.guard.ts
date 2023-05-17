import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    // console.log(route);
    // console.log(state);

    console.log('AlunosGuard: Guarda de rota filha');

    // if (state.url.includes('editar')){
    //   alert('Usuário sem acesso');
    //   return false;
    // }

    return true;
  }
}
