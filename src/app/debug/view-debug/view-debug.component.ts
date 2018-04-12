import { Component, OnInit } from '@angular/core';
import { ValorMag } from 'shared/core';
import { Ser } from 'shared/core/ser';
import { GeraInteiroService } from 'shared/services/geradores/geral';

@Component({
  selector: 'app-view-debug',
  providers: [GeraInteiroService],
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
    this.numero = this.geraInteiroService.getEntre(Math.random(), 1, 100);
  }

}
