import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]' //antes do [] se você colocar o nome de uma tag, o estilo será aplicado somente a essa tag, se nada for colocado, será aplicado para todas as tags que você colocar na página de html
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // console.log(this.elementRef)
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'; // Utilizar o ElementRef somente em ultimo caso, por questões de segurança
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow')
  }

}
