import { Component, OnInit, NgModule } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CursosModule } from './cursos.module';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  cursos: any[] = [''];
  pagina1: number = 0;
  pagina2: number = 0;
  inscricao!: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina1 = queryParams['pagina'];
        console.log(this.pagina1 + 'teste1')
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina2++;
    this.router.navigate(['/cursos'],
      { queryParams: { 'pagina': +this.pagina2 } });
    console.log('pagina ' + this.pagina2 + 'teste2')
  }

}

@NgModule({
  imports: [RouterModule],
  exports: []
})

export class CursosComponente { }
