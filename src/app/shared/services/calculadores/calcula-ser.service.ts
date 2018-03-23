import { Injectable } from '@angular/core';
import { Ser } from '../..';
import { Especie } from '../../classes/identidade/especie';

@Injectable()
export class CalculaSerService {

  CalculaSer(ser: Ser): Ser {
    //Carisma e Destino = os mesmos da índole do ser.
    ser.carisma = ser.indole.carisma;
    ser.destino = ser.indole.destino;
    //Calcula o Especial
    ser.especial = this.calculaEspecial(ser.especies);
    //Calcula Deslocamentos
    //Cria lista de Perícias
    //Cria lista de Habilidades
    //Calcula cansaço
    //Calcula natureza
    //Calcula Fé e Karma
    //Calcula subatributos
    //Calcula Ira, FV e PS
    //Resposta
    //Fugacidade
    //Deslocamento
    //Modificadores
    //Magnitude
    //Energias
    //Experiência
    //Ativar Modificadores

    return ser;
  }
  
  calculaEspecial(especies: Especie[]): number{
    return 0;
  }










  constructor() { }

}
