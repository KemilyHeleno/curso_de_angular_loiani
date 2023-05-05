import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: any = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput?: ElementRef

  incrementa() {
    console.log('this.campoValorInput: ', this.campoValorInput?.nativeElement.value);
    this.valor = this.valor + 1;

    this.campoValorInput?.nativeElement.value ?
      this.campoValorInput.nativeElement.value = this.valor :
      this.mudouValor.emit({ novoValor: this.valor });

    console.log( "Valor", this.valor);
  }

  decrementa() {
    this.campoValorInput ? this.campoValorInput.nativeElement.value--:
    this.mudouValor.emit({ novoValor: this.valor });
    console.log( "Valor", this.valor);

  }

  ngOnInit(): void {

  }
}
