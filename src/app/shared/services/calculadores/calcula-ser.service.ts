import { Injectable } from '@angular/core';
import { Ser, ValorMag } from '../..';
import { Especie } from '../../classes/ser/especie';
import { Deslocamento } from '../../classes/ser/deslocamento';
import { CalculaNumeroService } from '.';

@Injectable()
export class CalculaSerService {

  calculaSer(ser: Ser): Ser {
    console.log("(CalculaSerService.calculaSer) - Iniciando calculo de Ser");    
    //Calcula o Especial
    ser.especial = this.calculaEspecial(ser.identidade.especies);
    //Calcula Deslocamentos
    ser.deslocamentos = this.calculaDeslocamentos(ser);
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
  
  private calculaEspecial(especies: Especie[]): number{
    console.log("(CalculaSerService.calculaEspecial) - Iniciando calculo de Especial");
    var especial = Math.max(...especies.map(a => a.especial));
    console.log("(CalculaSerService.calculaEspecial) - Especial do ser: " + especial);
    return especial;
  }

  private calculaDeslocamentos(ser: Ser): Deslocamento[]{
    var desSolo = new Deslocamento();
    var desAr = new Deslocamento();
    var desMar = new Deslocamento();
    var desEspaco = new Deslocamento();
    var result = new Array<Deslocamento>();
    console.log("(CalculaSerService.calculaDeslocamentos) - Iniciando calculo de Deslocamentos");
    
    //Solo
    desSolo = this.calculaDeslocamentoSolo(ser);
    result.push(desSolo);
    //Ar
    desAr = this.calculaDeslocamentoAr(ser);
    result.push(desAr);
    //Mar
    //Espaço
    return result;
  }

  //(Minimo da Espécie * (FatorDex + FatorFor)) / 2
  //FatorDex e FatorFor = quantos % acima ou abaixo do minimo da especie o ser está
  calculaDeslocamentoAr(ser:Ser):Deslocamento{
    console.log("(CalculaSerService.calculaDesolocamentoAr) - Iniciando cálculo de Deslocamento em Ar.");
      var resultado = new Deslocamento(new ValorMag(), "Ar");
      var desArEspecie = ser.identidade.especies[0].deslocamentosMedios.filter(d => d.tipo == "Ar");
      if (desArEspecie != null)
      {
        console.log("(CalculaSerService.calculaDesolocamentoAr) - Deslocamento em ar da espécie encontrado: " + desArEspecie[0].valor.toString());
        var calc = new CalculaNumeroService();
        var especieDexMin = ser.identidade.especies[0].atributos.min.destreza.pontos;
        var especieForMin = ser.identidade.especies[0].atributos.min.forca.pontos;
        var serDex = ser.atributos.destreza.pontos;
        var serFor = ser.atributos.forca.pontos;
        var fatorDex = 10 * serDex / especieDexMin;
        var fatorFor = 10 * serFor / especieForMin;
        //Média dos dois valores para multiplicar com o minimo da espécie
        var fatorTotal = (fatorDex + fatorFor) / 2;
        resultado.valor = calc.multiplicaValorMag(desArEspecie[0].valor, undefined, fatorTotal);
        resultado.valor = calc.divideValorMag(resultado.valor, undefined, 2);
        console.log("(CalculaSerService.calculaDeslocamentoAr) - Deslocamento em ar do ser calculado: " + resultado.toString());
        return resultado;
      }else{
        console.log("(CalculaSerService.calculaDeslocamentoAr) - Deslocamento em ar da espécie não encontrado. Retornando vazio.");
        return resultado;
      }
  }

  //Minimo da Espécie * (FatorDex + FatorFor)
  //FatorDex e FatorFor = quantos % acima ou abaixo do minimo da especie o ser está
  calculaDeslocamentoSolo(ser:Ser): Deslocamento{
    console.log("(CalculaSerService.calculaDeslocamentoSolo) - Iniciando cálculo de Deslocamento em Solo.");
    var result = new Deslocamento(new ValorMag(), "Solo");
    var desSoloEspecie = ser.identidade.especies[0].deslocamentosMedios.filter(d => d.tipo == "Solo");
    if (desSoloEspecie.length > 0)
    {
      console.log("(CalculaSerService.calculaDeslocamentoSolo) - Deslocamento em solo da espécie encontrado: " + desSoloEspecie[0].valor.toString());
      var calc = new CalculaNumeroService();
      var especieDexMin = ser.identidade.especies[0].atributos.min.destreza.pontos;
      var especieForMin = ser.identidade.especies[0].atributos.min.forca.pontos;
      var serDex = ser.atributos.destreza.pontos;
      var serFor = ser.atributos.forca.pontos;
      //Retorna as porcentagens a mais (ou a menos) que os atributos atuais têm sobre a espécie
      var fatorDex = 10 * serDex / especieDexMin;
      var fatorFor = 10 * serFor / especieForMin;
      //Média dos dois valores para multiplicar com o minimo da espécie
      var fatorTotal = (fatorDex + fatorFor) / 2;
      result.valor = calc.multiplicaValorMag(desSoloEspecie[0].valor, undefined, fatorTotal);
      console.log("(CalculaSerService.calculaDeslocamentoSolo) - Deslocamento em solo do ser calculado: " + result.toString());
      return result;
    }else{
      console.log("(CalculaSerService.calculaDeslocamentoSolo) - Deslocamento em solo da espécie não encontrado. Retornando vazio.");
      return result;
    }
  }
  
  constructor() { }

}
