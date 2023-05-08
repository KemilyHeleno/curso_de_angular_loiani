import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent {
  ativo = false;
  tamanhoFonte: any = 10;

  mudarAtivo(){
    this.ativo = !this.ativo
  }

}
