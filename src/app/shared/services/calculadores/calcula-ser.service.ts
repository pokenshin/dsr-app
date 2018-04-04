import { Injectable } from '@angular/core';
import { Ser, ValorMag } from '../..';
import { Especie } from '../../classes/ser/especie';
import { Deslocamento } from '../../classes/ser/deslocamento';
import { CalculaNumeroService } from '.';
import { Pericia } from '../../classes/ser/pericia';
import { Habilidade } from '../../classes/ser/habilidades/habilidade';
import { Comportamento } from '../../classes/ser/comportamento';

@Injectable()
export class CalculaSerService {



  calculaSer(ser: Ser): Ser {
    console.log("(CalculaSerService.calculaSer) - Iniciando calculo de Ser");    
    //Calcula o Especial
    ser.especial = this.calculaEspecial(ser.identidade.especies);
    //Calcula Deslocamentos
    ser.deslocamentos = this.calculaDeslocamentos(ser);
    //Cria lista de Perícias
    ser.pericias = this.criaListaPericias(ser);
    //Cria lista de Habilidades
    ser.habilidades = this.criaListaHabilidades(ser);
    //Calcula cansaço
    ser.elo.cansacoMax = this.calculaCansaco(ser);
    //Calcula comportamento
    ser.elo.comportamento = this.calculaComportamento(ser);
    //Calcula Fé e Karma
    ser.elo.fe = this.calculaFe(ser);
    ser.elo.karma = this.calculaKarma(ser);
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

  calculaKarma(ser:Ser):number{
    console.log("(CalculaSerService.calculaKarma) - Iniciando cálculo de karma de Ser");    
    var resultado = Math.max(...ser.identidade.especies.map(a => a.karma.min));
    console.log("(CalculaSerService.calculaKarma) - Finalizando cálculo de karma de Ser:", resultado);    
    return resultado;
  }

  calculaFe(ser:Ser):number{
    console.log("(CalculaSerService.calculaFe) - Iniciando cálculo de fé de Ser");    
    var resultado = Math.max(...ser.identidade.especies.map(a => a.fe.min));
    console.log("(CalculaSerService.calculaFe) - Finalizando cálculo de fé de Ser:", resultado);
    return resultado;
  }

  calculaComportamento(ser: Ser): Comportamento {
    console.log("(CalculaSerService.calculaComportamento) - Iniciando cálculo de comportamento de Ser");    
    var resultado = new Comportamento(); 
    resultado.apresentacao = Math.max(...ser.identidade.especies.map(a => a.comportamento.apresentacao));
    resultado.concepcao = Math.max(...ser.identidade.especies.map(a => a.comportamento.concepcao));
    resultado.honra = Math.max(...ser.identidade.especies.map(a => a.comportamento.honra));
    resultado.moral = Math.max(...ser.identidade.especies.map(a => a.comportamento.moral));
    resultado.percepcao = Math.max(...ser.identidade.especies.map(a => a.comportamento.percepcao));
    resultado.personalidade = Math.max(...ser.identidade.especies.map(a => a.comportamento.personalidade));
    console.log("(CalculaSerService.calculaComportamento) - Finalizando cálculo de comportamento de Ser: ", resultado);    
    return resultado;
  }

  calculaCansaco(ser:Ser):number{
    console.log("(CalculaSerService.calculaCansaco) - Iniciando cálculo de cansaço de Ser");    
    var resultado = Math.max(...ser.identidade.especies.map(a => a.cansaco.max));
    console.log("(CalculaSerService.calculaCansaco) - Finalizando cálculo de cansaço de Ser: " + resultado);    
    return resultado;
  }

  criaListaHabilidades(ser:Ser):Habilidade[]{
    console.log("(CalculaSerService.criaListaHabilidades) - Iniciando listagem de habilidades de Ser");    
    var resultado = new Array<Habilidade>();

    ser.identidade.especies.forEach(esp => {
      esp.habilidades.forEach(hab =>{
        console.log("(CalculaSerService.criaListaHabilidades) - " + esp.habilidades.length + " habilidades na espécie.");    
        var ids = Array.from(resultado.map(a => a.id));
        if (ids.indexOf(hab.id) > -1){
          resultado.push(hab);
        }
      })
      console.log("(CalculaSerService.criaListaHabilidades) - Fim da listagem de habilidades de Ser. Total: " + resultado.length);    
    });

    return resultado;
  }
  
  criaListaPericias(ser:Ser):Pericia[]{
    console.log("(CalculaSerService.criaListaPericias) - Iniciando listagem de perícias de Ser");    
    var resultado = new Array<Pericia>();

    ser.identidade.classes.forEach(element => {
      resultado = resultado.concat(element.pericias);
      console.log("(CalculaSerService.criaListaPericias) - " + element.pericias.length + " perícias das classes inseridas. Total: " + resultado.length );    
    });

    ser.identidade.especies.forEach(element => {
      resultado = resultado.concat(element.pericias);
      console.log("(CalculaSerService.criaListaPericias) - " + element.pericias.length + " perícias das espécies inseridas. Total: " + resultado.length);    
    });

    console.log("(CalculaSerService.criaListaPericias) - Fim da listagem de perícias de Ser. Total: " + resultado.length);    
    return resultado;
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
    desMar = this.calculaDeslocamentoMar(ser);
    result.push(desMar);
    //Espaço
    desEspaco = this.calculaDesolocamentoEspaco(ser);
    result.push(desEspaco);
    
    console.log("(CalculaSerService.calculaDeslocamentos) - Fim do calculo de Deslocamentos");
    return result;
  }

  calculaDesolocamentoEspaco(ser:Ser):Deslocamento{
    console.log("(CalculaSerService.calculaDesolocamentoEspaco) - Iniciando cálculo de Deslocamento em Espaço.");
    var resultado = new Deslocamento(new ValorMag(0,0), "Espaço");
    var desEspEspecie = ser.identidade.especies[0].deslocamentosMedios.filter(d => d.tipo == "Espaço");
    if (desEspEspecie.length > 0){ 
      console.log("(CalculaSerService.calculaDesolocamentoEspaco) - Deslocamento em espaço da espécie encontrado: " + desEspEspecie[0].valor.toString());
      var calc = new CalculaNumeroService();
      var especieDexMin = ser.identidade.especies[0].atributos.min.destreza.pontos;
      var especieForMin = ser.identidade.especies[0].atributos.min.forca.pontos;
      var serDex = ser.atributos.destreza.pontos;
      var serFor = ser.atributos.forca.pontos;
      var fatorDex = 10 * serDex / especieDexMin;
      var fatorFor = 10 * serFor / especieForMin;
      //Média dos dois valores para multiplicar com o minimo da espécie
      var fatorTotal = (fatorDex + fatorFor) / 2;
      resultado.valor = calc.multiplicaValorMag(desEspEspecie[0].valor, undefined, fatorTotal);
      resultado.valor = calc.divideValorMag(resultado.valor, undefined, 2);
      console.log("(CalculaSerService.calculaDesolocamentoEspaco) - Deslocamento em espaço do ser calculado: " + resultado.toString());
      return resultado;
    }else{
      console.log("(CalculaSerService.calculaDesolocamentoEspaco) - Deslocamento em espaço da espécie não encontrado. Retornando vazio.");
      return resultado;
    }
  }

  //(Minimo da Espécie * (FatorDex + FatorFor)) / 2
  //FatorDex e FatorFor = quantos % acima ou abaixo do minimo da especie o ser está
  calculaDeslocamentoAr(ser:Ser):Deslocamento{
    console.log("(CalculaSerService.calculaDeslocamentoAr) - Iniciando cálculo de Deslocamento em Ar.");
      var resultado = new Deslocamento(new ValorMag(), "Ar");
      var desArEspecie = ser.identidade.especies[0].deslocamentosMedios.filter(d => d.tipo == "Ar");
      if (desArEspecie.length > 0)
      {
        console.log("(CalculaSerService.calculaDeslocamentoAr) - Deslocamento em ar da espécie encontrado: " + desArEspecie[0].valor.toString());
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

  //(Minimo da Espécie * (FatorDex + FatorFor)) / 3
  //FatorDex e FatorFor = quantos % acima ou abaixo do minimo da especie o ser está
  calculaDeslocamentoMar(ser):Deslocamento{
    console.log("(CalculaSerService.calculaDeslocamentoMar) - Iniciando cálculo de Deslocamento em Mar.");
    var resultado = new Deslocamento(new ValorMag(), "Mar");
    var desMarEspecie = ser.identidade.especies[0].deslocamentosMedios.filter(d => d.tipo == "Mar");
    if (desMarEspecie.length > 0){
      console.log("(CalculaSerService.calculaDeslocamentoMar) - Deslocamento em mar da espécie encontrado: " + desMarEspecie[0].valor.toString());
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

      resultado.valor = calc.multiplicaValorMag(desMarEspecie[0].valor, undefined, fatorTotal);
      resultado.valor = calc.divideValorMag(resultado.valor, undefined, 3);
      console.log("(CalculaSerService.calculaDeslocamentoMar) - Deslocamento em mar do ser calculado: " + resultado.toString());

      return resultado;
    }else{
      console.log("(CalculaSerService.calculaDeslocamentoMar) - Deslocamento em mar da espécie não encontrado. Retornando vazio.");

      return resultado;
    }
    
  }




  
  constructor() { }

}
