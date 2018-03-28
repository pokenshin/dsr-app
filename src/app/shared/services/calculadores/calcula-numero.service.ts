import { Injectable } from '@angular/core';
import { ValorMag } from '../..';

@Injectable()
export class CalculaNumeroService {
  constructor() { }

  multiplicaValorMag(valorMag1: ValorMag, valorMag2: ValorMag):ValorMag{
    if (valorMag1.toString() == "1m2" || valorMag1.toString() == "10m1"){
      return valorMag2;
    } else if (valorMag2.toString() == "1m2" || valorMag2.toString() == "10m1"){
      return valorMag1;  
    } else if (valorMag1.valor == 0 || valorMag2.valor == 0){
      return new ValorMag(0, 1);
    } else {
      var magFinal = (valorMag1.magnitude + valorMag2.magnitude) - 2;
      var valorFinal = (valorMag1.valor * valorMag2.valor);
      while (valorFinal > 99)
      {
          valorFinal = valorFinal / 10;
          magFinal = magFinal + 1;
      }
  
      return new ValorMag(Math.floor(valorFinal), Math.floor(magFinal));
    }
  }

  divideValorMag(valor: ValorMag, divisor: ValorMag):ValorMag{
    if (valor.toString() == "0m0"){
      return new ValorMag(0);
    } else if (divisor.toString() == "0m0"){
      return new ValorMag(0);
    } else if (divisor.toString() == "1m1" || divisor.toString() == "10m0"){
      return valor;
    } else {
      var magFinal = ((valor.magnitude - 2) - (divisor.magnitude - 2)) + 2;
      var valorFinal = (valor.valor / divisor.valor);

      while (valorFinal < 10)
      {
          valorFinal = valorFinal * 10;
          magFinal = magFinal - 1;
      }

      return new ValorMag(Math.floor(valorFinal), magFinal);
    }    
  }

  calculaPorcentagem(porcentagem: number, valor: number):number{    
    var pct = porcentagem / 100;
    var resultado = valor * pct;
    return Math.floor(resultado);
  }

  calculaPorcentagemDeTotal(valor: number, total: number):number{
    return (valor / total) * 100;
  }

  subtraiValorMag(valorMag1: ValorMag, valorMag2: ValorMag):ValorMag{
    if (valorMag1.toString() == valorMag2.toString()){
      return new ValorMag();
    }
    var valorFinal = 0;
    var magnitudeFinal = 0;
    var valor1 = valorMag1.valor;
    var valor2 = valorMag2.valor;
    var mag1 = valorMag1.magnitude;
    var mag2 = valorMag2.magnitude;

    if (mag1 == mag2){
      magnitudeFinal = mag1;
      valorFinal = valor1 - valor2;
      if (valorFinal < 0){
        valorFinal *= 10;
        magnitudeFinal -= 1; 
      }
    }else if (mag1 - mag2 == 1 || mag1 - mag2 == -1){
      magnitudeFinal = Math.max(mag1, mag2);

      if (magnitudeFinal == mag1)
          valorFinal = valor1 - (valor2 / 10);
      else
          valorFinal = valor2 - (valor1 / 10);      
    }else{
      magnitudeFinal = Math.max(mag1, mag2);
      if (magnitudeFinal == mag1)
          valorFinal = valor1;
      else
          valorFinal = valor2;    
    }

    return new ValorMag(valorFinal, magnitudeFinal);
  }

  somaValorMag(valorMag1: ValorMag, valorMag2: ValorMag): ValorMag{
    var valorFinal = 0;
    var magnitudeFinal = 0;
    var valor1 = valorMag1.valor;
    var valor2 = valorMag2.valor;
    var mag1 = valorMag1.magnitude;
    var mag2 = valorMag2.magnitude;

    if (mag1 == mag2){
      magnitudeFinal = mag1;
      valorFinal = valor1 + valor2;

      if (valorFinal > 99)
      {
          valorFinal = valorFinal / 10;
          magnitudeFinal = magnitudeFinal + 1;
      }
    } else if (mag1 - mag2 == 1 || mag1 - mag2 == -1){
      magnitudeFinal = Math.max(mag1, mag2);

      if (magnitudeFinal == mag1)
          valorFinal = valor1 + (valor2 / 10);
      else
          valorFinal = valor2 + (valor1 / 10);
    }
    else{
      magnitudeFinal = Math.max(mag1, mag2);
      if (magnitudeFinal == mag1)
          valorFinal = valor1;
      else
          valorFinal = valor2;
    }

    return new ValorMag(valorFinal, magnitudeFinal);
    }

}