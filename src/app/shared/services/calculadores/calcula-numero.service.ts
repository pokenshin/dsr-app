import { Injectable } from '@angular/core';
import { ValorMag } from 'shared/core';

@Injectable()
export class CalculaNumeroService {
  constructor() { }

  valorMagToNumber(numero:ValorMag):number{
    var result = 0;
    var zeros = '';
    var numeroLength = numero.valor.toString().length;

    for (var i = 0; i < numero.magnitude-numeroLength; i++) { 
      zeros = zeros + '0';
    }

    result = parseInt(numero.valor.toString() + zeros);
  
    return result;
  }

  multiplicaValorMag(valorMag1: ValorMag, valorMag2?: ValorMag, multiplicador?: number):ValorMag{
    if (valorMag2 != undefined){
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
    }else if (multiplicador != undefined){
      if (multiplicador == 1){
        return valorMag1;
      } else if (valorMag1 == new ValorMag() || multiplicador == 0)
        return new ValorMag(0, 1);
      else
        return this.multiplicaValorMag(valorMag1, this.numberToValorMag(multiplicador));
    }
  }

  numberToValorMag(numero:number):ValorMag{
      var magnitude = 0;
      var valor = 0;
      var result = new ValorMag();
      var numeroString = numero.toString();

      //Se for numero decimal
      if (numero % 1 != 0){
        //Se o numero decimal for menor que 10
        if (numero < 10){
          //Se o numero decimal for maior que 1
          if (numero > 1){

            magnitude = 1;
            numeroString = numeroString[0] + numeroString[2];
            var valorNumber = parseInt(numeroString);
            result = new ValorMag(valorNumber, magnitude);

            return result;
          }else{
            //Se o numero decimal for menor que 1
            magnitude = 0;

            if (numeroString.includes(","))
                numero = parseInt(numeroString.split(',')[1]);
            else
                numero = parseInt(numeroString.split('.')[1]);

            while (numeroString.startsWith('0', 0))
            {
                magnitude = magnitude - 1;
                numeroString = numeroString.substr(1, numeroString.length);
            }

            if (numeroString.length > 3)
                numeroString = numeroString.substr(2, numeroString.length - 2);

            valor = parseInt(numeroString);

            if (valor < 10){
              valor = valor * 10;
            }
                
            result = new ValorMag(valor, magnitude);

            return result;
          }
        }else{
          //Se o numero decimal for maior que 10, descarta quebrados
           if (numeroString.includes(","))
            numeroString = numeroString.split(',')[0];
          else
            numeroString = numeroString.split('.')[0];
      }
    }
    //Se for numero inteiro ou decimal maior que 10
    magnitude = numeroString.length;
    if (magnitude > 1){
      valor = parseInt(numeroString.substr(0, 2));
    }else{
      valor = parseInt(numeroString + "0");
    }         
    result = new ValorMag(valor, magnitude);
    return result;
  }

  divideValorMag(valor: ValorMag, divisor?: ValorMag, divisorNum?:number):ValorMag{
    if (divisor != undefined){
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
    }else{
      if (divisorNum == 0){
        return new ValorMag(0,0);
      } if (divisorNum == 1){
        return valor;
      } else{
        return this.divideValorMag(valor, this.numberToValorMag(divisorNum));
      }
      
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
    return new ValorMag(Math.floor(valorFinal), Math.floor(magnitudeFinal));
  }

}
