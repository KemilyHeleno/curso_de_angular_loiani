import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: any = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  ngOnInit(): void {

  }
}
