import { Component, OnInit } from '@angular/core';
import { Ser, Identidade } from 'shared/core/ser';
import { GeraSerService } from 'shared/services/geradores/seres';
import { AtributosSer } from 'shared/core/ser/atributos';
import { Energia } from 'shared/core/energias';

@Component({
  selector: 'app-view-ficha',
  templateUrl: './view-ficha.component.html',
  styleUrls: ['./view-ficha.component.css']
})
export class ViewFichaComponent implements OnInit {
  ser:Ser;
  identidade:Identidade;
  atributos:AtributosSer;
  energias:Energia[];

  constructor() { }

  ngOnInit() {
    var gSer = new GeraSerService();
    this.ser = gSer.get(Math.random());
    this.identidade = this.ser.identidade;
    this.atributos = this.ser.atributos;
    this.energias = this.ser.energias;
  }

}
