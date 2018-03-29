import { Injectable } from '@angular/core';
import { GeraInteiroService } from './gera-inteiro.service';
import { Gerador } from '../gerador';
import { GeraBooleanService } from './gera-boolean.service';

@Injectable()
export class GeraStringService implements Gerador {
  private rng: GeraInteiroService;
  private consoantes = "bcdfghjklmnpqrstvwxyz";
  private vogais = "aeiou";

  get(seed: number) {
    var min = this.rng.getEntre(Math.random(), 1, 10);
    var max = this.rng.getEntre(Math.random(), 1, 10);

    return this.getTamanhoEspecifico(seed, min, max);
  }

  getLista(seed: number, quantidade: number): any[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado; 
  }

  getTamanhoEspecifico(seed:number, min:number, max:number){
    var geraBool = new GeraBooleanService();
    var resultado = "";
    var tamanhoResultado = this.rng.getEntre(seed, min, max);
    //console.log ("Min: " + min + " / Max: " + max);

    while (resultado.length < tamanhoResultado){
      if (resultado.length == 0){
        if (geraBool.getComChance(seed, 0.5)){
          resultado += this.consoantes.charAt(Math.floor(Math.random() * this.consoantes.length)).toUpperCase();
         // console.log("Primeira letra = Consoante: " + resultado );
        }else{
          resultado += this.vogais.charAt(Math.floor(Math.random() * this.vogais.length)).toUpperCase();
          //console.log("Primeira letra = Vogal: " + resultado );
        }
      }else{
        var ultimaLetra = resultado.charAt(resultado.length - 1);
        var chanceVogal = 0.5;
        if (this.consoantes.includes(ultimaLetra)){
          if (resultado.length > 1){
            if (resultado.length > 2){
              if (this.consoantes.includes(resultado.charAt(resultado.length - 3))){
                chanceVogal = 1;
              }
            }else if(this.consoantes.includes(resultado.charAt(resultado.length - 2))){
              chanceVogal = 0.9;
            }
          } else{
            chanceVogal = 0.7;
          }
        } else{
          if (resultado.length > 1){
            if (this.vogais.includes(resultado.charAt(resultado.length-2))){
              chanceVogal = 0.01;
            }
            else{
              chanceVogal = 0.1;
            }
          } else{
            chanceVogal = 0.3;
          }
        }
      } if (max > 1){
        //console.log("Chance vogal: " + chanceVogal);
        if (geraBool.getComChance(seed, chanceVogal)){
          resultado += this.vogais.charAt(Math.floor(Math.random() * this.vogais.length));
          //console.log("Adicionou vogal: " + resultado );
        }else{
          resultado += this.consoantes.charAt(Math.floor(Math.random() * this.consoantes.length));
          //console.log("Adicionou Consoante: " + resultado );
        }
      }
    }

    return resultado;
  }


  constructor() {
    this.rng = new GeraInteiroService();
   }

}
