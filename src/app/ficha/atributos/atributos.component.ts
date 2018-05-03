import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AtributosSer } from 'shared/core/ser/atributos';
import { ValorMag } from 'shared/core';

@Component({
  selector: 'app-ficha-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {
  @Input() nome:Text;
  @Input() classe:Text;
  @Input() nivel:number;
  @Input() pontos:number;
  @Input() porcentagem:ValorMag;
  @Input() atrib1_nome:Text;
  @Input() atrib1:any;
  @Input() atrib2_nome:Text;
  @Input() atrib2:any;
  @Input() atrib3_nome:Text;
  @Input() atrib3:any;
  @Input() atrib4_nome:Text;
  @Input() atrib4:any;
  @Input() atrib5_nome:Text;
  @Input() atrib5:any;

  constructor() { }

  ngOnInit() {
    if (typeof this.atrib1 == 'number'){
      this.atrib1 = this.checaValorMag(Number(this.atrib1));
    }
    if (typeof this.atrib2 == 'number'){
      this.atrib2 = this.checaValorMag(Number(this.atrib2));
    }
    if (typeof this.atrib3 == 'number'){
      this.atrib3 = this.checaValorMag(Number(this.atrib3));
    }
    if (typeof this.atrib4 == 'number'){
      this.atrib4 = this.checaValorMag(Number(this.atrib4));
    }
    if (typeof this.atrib5 == 'number'){
      this.atrib5 = this.checaValorMag(Number(this.atrib5));
    }
  }

  checaValorMag(atributo:number):ValorMag{
    return new ValorMag(atributo, 0)
  }

}
