import { Component, OnInit } from '@angular/core';
import { Ser, Identidade } from 'shared/core/ser';
import { GeraSerService } from 'shared/services/geradores/seres';

@Component({
  selector: 'app-view-ficha',
  templateUrl: './view-ficha.component.html',
  styleUrls: ['./view-ficha.component.css']
})
export class ViewFichaComponent implements OnInit {
  ser:Ser;
  identidade:Identidade;

  constructor() { }

  ngOnInit() {
    var gSer = new GeraSerService();
    this.ser = gSer.get(Math.random());
    this.identidade = this.ser.identidade;
  }

}
