import { Component, OnInit } from '@angular/core';
import { Ser, ValorMag } from '../../shared';
import { GeraInteiroService } from '../../shared/services/geradores/gera-inteiro.service';

@Component({
  selector: 'app-view-debug',
  templateUrl: './view-debug.component.html',
  styleUrls: ['./view-debug.component.css']
})
export class ViewDebugComponent implements OnInit {
  numero: number;
  constructor(private geraInteiroService: GeraInteiroService) { }

  ngOnInit() {
    this.geraNumero();
  }

  geraNumero(): void{
    this.numero = this.geraInteiroService.get(Math.random(), 1, 10);
  }

}
