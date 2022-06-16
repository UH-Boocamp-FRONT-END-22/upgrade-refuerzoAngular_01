import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
  titulo: string = 'ESTO ES UN CONTADOR';
  numero: number = 55;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

}
