import { Component, OnInit, Input } from '@angular/core';
import { Identidade } from 'shared/core/ser';

@Component({
  selector: 'app-ficha-identidade',
  templateUrl: './identidade.component.html',
  styleUrls: ['./identidade.component.css']
})
export class IdentidadeComponent implements OnInit {
  @Input() identidade:Identidade;
  especieValue:string = '';
  classeValue:string = '';
  reiValue:string = '';

  constructor() { }

  ngOnInit() {
    this.identidade.especies.forEach(esp =>{
      this.especieValue += esp.taxonomia.nomePopular + " ";
    })
    this.identidade.classes.forEach(cla =>{
      this.classeValue += cla.nome + " ";
    })
  }

}
