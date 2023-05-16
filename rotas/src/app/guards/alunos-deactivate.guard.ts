import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree, Route } from '@angular/router';
import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";

@Injectable()

export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent>{

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda de desativação');

    return component.podeMudarRota();
  }
}
