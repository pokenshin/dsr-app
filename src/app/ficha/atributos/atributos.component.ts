import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AtributosSer } from 'shared/core/ser/atributos';

@Component({
  selector: 'app-ficha-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {
  @Input() atributos:AtributosSer;

  constructor() { }

  ngOnInit() {
  }

}
