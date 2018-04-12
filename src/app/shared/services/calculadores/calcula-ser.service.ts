import { Injectable } from '@angular/core';
import { ValorMag } from 'shared/core';
import { Ser, Pericia, Comportamento, Subatributos, Cerne, Resposta, Experiencia, Deslocamento } from 'shared/core/ser';
import { Especie } from 'shared/core/ser/especie';
import { CalculaNumeroService } from './calcula-numero.service';
import { Habilidade } from 'shared/core/ser/habilidades';
import { GeraValorMagService } from 'shared/services/geradores/geral';
import { Atributo } from 'shared/core/ser/atributos';
import { Modificador } from 'shared/core/ser/modificadores';
import { Energia } from 'shared/core/energias';

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
    //Calcula subatributos e cerne
    ser.subatributos = this.calculaSubatributos(ser);
    ser.cerne = this.calculaCerne(ser);
    //Calcula Ira, FV e PS
    ser.ira = this.calculaIra(ser);
    ser.forcaVontade = this.calculaForcaVontade(ser);
    ser.poderMaximo = this.calculaPoderMaximo(ser);
    //Resposta
    ser.resposta = this.calculaResposta(ser);
    //Fugacidade
    ser.fugacidade = this.calculaFugacidade(ser);
    //Modificadores
    ser.modificadoresAtivos = this.calculaModificadoresAtivos(ser);
    //Magnitude
    ser.identidade.magnitude = this.calculaMagnitude(ser);
    //Energias
    ser.energias = this.calculaEnergias(ser);
    //Experiência
    ser.experiencia = this.calculaExperiencia(ser);
    //Ativar Modificadores
    return ser;
  }

  calculaExperiencia(ser:Ser):Experiencia{
    console.log("(CalculaSerService.calculaExperiencia) - Iniciando calculo de Experiência do Ser");
    //Pontos de Graduação (G) = 10^Magnitude do Personagem
    //Pontos de Evolução (En) = Nivel * G
    //Experiência Total (XPn) = (G*(nivel^2 - nivel)) / 2
    var resultado = new Experiencia();

    resultado.pontosGraduacao = Math.floor(Math.pow(10, ser.identidade.magnitude));
    resultado.pontosEvolucao = Math.floor(ser.identidade.nivel * resultado.pontosGraduacao);
    resultado.experienciaAtual = Math.floor((resultado.pontosGraduacao * (Math.pow(ser.identidade.nivel, 2) - ser.identidade.nivel / 2)));
    
    console.log("(CalculaSerService.calculaExperiencia) - Experiência do Ser calculada:", resultado)
    return resultado;;
  }

  calculaEnergias(ser:Ser):Energia[]{
    console.log("(CalculaSerService.calculaMagnitude) - Iniciando calculo de Energias do Ser");
    var resultado = new Array<Energia>();
    var siglas = new Array<string>();
    var calc = new CalculaNumeroService();

    ser.identidade.especies.forEach(e => {
      e.energias.forEach(ene =>{
        siglas = resultado.map(r=>r.sigla);
        if (!siglas.includes(ene.sigla)){
          var novaEnergia = new Energia(ene.id, ene.sigla, ene.nome);
          resultado.push(novaEnergia);
        }
      });
    });
    console.log("(CalculaSerService.calculaMagnitude) - Tipos de Energias detectadas:", resultado);

    //Energias: "AP", "CP", "EP", "HP", "MP", "QP", "SP", "PE", "PA";
    resultado.forEach(e=>{
      //Soma todas as quantidades das energias dentro de cada uma das espécies do ser
      //Ex: pega todos os APs de todas as espécies e soma
      ser.identidade.especies.forEach(esp =>{
        if(esp.energias.map(x => x.sigla = e.sigla).length > 0){
          e.quantidade += esp.energias.filter(ener=>ener.sigla == e.sigla)[0].quantidade;
        }
      });
      switch (e.sigla){
        case 'CP':
        e.quantidade += calc.valorMagToNumber(ser.subatributos.bonusCP);
        break;

        case 'EP':
        break;

        case 'HP':
        e.quantidade += calc.valorMagToNumber(ser.subatributos.bonusHP);
        break;

        case 'MP':
        e.quantidade += ser.identidade.ki * calc.valorMagToNumber(ser.subatributos.bonusMP);
        break;

        case 'SP':
        e.quantidade += calc.valorMagToNumber(ser.subatributos.bonusSP);
        break;

        case 'XP':
        e.quantidade *= ser.identidade.reis.length;
        break;

        case 'PE':
        break;

        case 'PA':
        break;
      }
      e.quantidade *= ser.identidade.nivel;
      console.log("(CalculaSerService.calculaMagnitude) - Energia: ", e);

    });

    return resultado;
  }
  //Magnitude média dos atributos
  //Pega magnitude do Rei se for maior que a média dos atributos
  calculaMagnitude(ser:Ser):number{
    console.log("(CalculaSerService.calculaMagnitude) - Iniciando calculo de Magnitude do Ser");
    var magTotal:number = ser.atributos.forca.porcentagem.magnitude + ser.atributos.destreza.porcentagem.magnitude + ser.atributos.materia.porcentagem.magnitude + ser.atributos.intelecto.porcentagem.magnitude + ser.atributos.criatividade.porcentagem.magnitude + ser.atributos.ideia.porcentagem.magnitude + ser.atributos.existencia.porcentagem.magnitude;
    magTotal /= 7;
    console.log("(CalculaSerService.calculaMagnitude) - Média de magnitudes dos atributos do Ser:", magTotal);
    var reiMagMax:number = Math.max(...ser.identidade.reis.map(r=>r.magnitude));
    console.log("(CalculaSerService.calculaMagnitude) - Magnitude máxima dos reis do Ser:", reiMagMax);
    var resultado = Math.floor(Math.max(magTotal, reiMagMax));
    console.log("(CalculaSerService.calculaMagnitude) - Magnitude do ser calculada: ", resultado);
    return resultado;
  }

  calculaModificadoresAtivos(ser:Ser):Modificador[]{
    console.log("(CalculaSerService.calculaModificadoresAtivos) - Iniciando calculo de Modificadores Ativos do Ser");
    var resultado = new Array<Modificador>();

    ser.pericias.forEach(per =>{
      resultado.concat(per.modificadores);
    });
    console.log("(CalculaSerService.calculaModificadoresAtivos) - Modificadores adicionados vindos de pericia. Tamanho total:", resultado.length);


    ser.itensEquipados.forEach(equip =>{
      resultado.concat(equip.modificadores);
    })
    console.log("(CalculaSerService.calculaModificadoresAtivos) - Modificadores adicionados vindos de equipamento. Tamanho total:", resultado.length);

    ser.identidade.reis.forEach(rei =>{
      resultado.concat(rei.modificadores);
    })
    console.log("(CalculaSerService.calculaModificadoresAtivos) - Modificadores adicionados vindos de reis. Tamanho total:", resultado.length);
    
    console.log("(CalculaSerService.calculaModificadoresAtivos) - Modificadores Ativos do Ser calculados:", resultado);
    return resultado;
  }
  calculaFugacidade(ser:Ser):Habilidade[]{
    console.log("(CalculaSerService.calculaFugacidade) - Iniciando calculo de Fugacidade do Ser");
    var resultado = new Array<Habilidade>();
    resultado = ser.habilidades.filter(h => h.tipo.nome == "Fugacidade");
    console.log("(CalculaSerService.calculaFugacidade) - Fugacidade do Ser calculada:", resultado);
    return resultado;
  }

  calculaResposta(ser:Ser):Resposta{
    console.log("(CalculaSerService.calculaResposta) - Iniciando calculo de Resposta do Ser");
    var resultado = new Resposta();  
    resultado.bravura = ser.identidade.especies[0].resposta.min.bravura;
    resultado.coragem = ser.identidade.especies[0].resposta.min.coragem;
    resultado.desespero = ser.identidade.especies[0].resposta.min.desespero;
    resultado.heroismo = ser.identidade.especies[0].resposta.min.heroismo;
    resultado.indiferenca = ser.identidade.especies[0].resposta.min.indiferenca;
    resultado.medo = ser.identidade.especies[0].resposta.min.medo;
    resultado.panico = ser.identidade.especies[0].resposta.min.panico;
    console.log("(CalculaSerService.calculaResposta) - Resposta do Ser calculada:", resultado);
    return resultado;
  }

  calculaPoderMaximo(ser:Ser):number{
    console.log("(CalculaSerService.calculaForcaVontade) - Iniciando calculo de PoderMaximo do Ser");
    var resultado = Math.max(...ser.identidade.especies.map(a => a.poderMaximo.max));
    console.log("(CalculaSerService.calculaForcaVontade) - PoderMaximo do Ser calculada:", resultado);
    return resultado;
  }

  calculaForcaVontade(ser:Ser):number{
    console.log("(CalculaSerService.calculaForcaVontade) - Iniciando calculo de FV do Ser");
    var resultado = Math.max(...ser.identidade.especies.map(a => a.forcaVontade.min));
    console.log("(CalculaSerService.calculaForcaVontade) - FV do Ser calculada:", resultado);
    return resultado;
  }

  calculaIra(ser:Ser):number{
    console.log("(CalculaSerService.calculaIra) - Iniciando calculo de Ira do Ser");
    var resultado = Math.max(...ser.identidade.especies.map(a => a.ira.min));
    console.log("(CalculaSerService.calculaIra) - Ira do Ser calculada:", resultado);
    return resultado;
  }

  calculaCerne(ser:Ser):Cerne{
    console.log("(CalculaSerService.calculaCerne) - Iniciando calculo de Cerne do Ser");
    var resultado = new Cerne();
    var rvmg = new GeraValorMagService();
    var calc = new CalculaNumeroService();

    //Acao = (vigor + vitalidade) * coordenação
    console.log("(CalculaSerService.calculaCerne) - Calculando Ação do Ser: (" + ser.atributos.forca.vigor.toString() + " + " + ser.atributos.materia.vitalidade.toString() + ") / " + ser.atributos.destreza.coordenacao.toString());
    resultado.acao = calc.somaValorMag(ser.atributos.forca.vigor, ser.atributos.materia.vitalidade);
    resultado.acao = calc.multiplicaValorMag(resultado.acao, ser.atributos.destreza.coordenacao);
    console.log("(CalculaSerService.calculaCerne) - Ação do Ser calculada: " + resultado.acao.toString());

    //Altura = aleatorio a partir da especie dominante
    console.log("(CalculaSerService.calculaCerne) - Calculando Altura do Ser entre: " + ser.identidade.especies[0].altura.min.toString() + " e " + ser.identidade.especies[0].altura.max.toString());
    resultado.altura = rvmg.getEntre(Math.random(), ser.identidade.especies[0].altura.min, ser.identidade.especies[0].altura.max);
    console.log("(CalculaSerService.calculaCerne) - Altura do Ser calculada: " + resultado.altura.toString());

    //Carga = ?????????????????????????????????
    resultado.carga = new ValorMag()

    //Comprimento = Pontos em matéria para ValorMag
    console.log("(CalculaSerService.calculaCerne) - Calculando Comprimento do Ser: " + ser.atributos.materia.pontos);
    resultado.comprimento = calc.numberToValorMag(ser.atributos.materia.pontos);
    console.log("(CalculaSerService.calculaCerne) - Comprimento do Ser calculado: " + resultado.comprimento.toString());

    //Destria = Pontos Destreza / 10 (até o maximo da espécie)
    console.log("(CalculaSerService.calculaCerne) - Calculando Destrias do Ser: " + ser.atributos.destreza.pontos / 10 + " - Entre " + ser.identidade.especies[0].destria.min + " e " +  ser.identidade.especies[0].destria.max);
    resultado.destria = Math.floor(ser.atributos.destreza.pontos / 10);
    if (resultado.destria > ser.identidade.especies[0].destria.max){
      resultado.destria = ser.identidade.especies[0].destria.max;
    }else if (resultado.destria < ser.identidade.especies[0].destria.min){
      resultado.destria = ser.identidade.especies[0].destria.min;
    }
    console.log("(CalculaSerService.calculaCerne) - Destrias do Ser calculadas: " + resultado.destria);

    //Essência = ????????????????????????????????????????????????????????
    resultado.essencia = new ValorMag();

    //Iniciativa = Destreza.Iniciativa
    console.log("(CalculaSerService.calculaCerne) - Calculando Iniciativa do Ser");
    resultado.iniciativa = ser.atributos.destreza.iniciativa;
    console.log("(CalculaSerService.calculaCerne) - Iniciativa do Ser:" + resultado.iniciativa.toString());

    //Largura = aleatorio a partir da especie dominante
    console.log("(CalculaSerService.calculaCerne) - Calculando Largura do Ser entre: " + ser.identidade.especies[0].largura.min.toString() + " e " + ser.identidade.especies[0].largura.max.toString());
    resultado.largura = rvmg.getEntre(Math.random(), ser.identidade.especies[0].largura.min, ser.identidade.especies[0].largura.max);
    console.log("(CalculaSerService.calculaCerne) - Largura do Ser calculada: " + resultado.largura.toString());

    //Massa = Volume * Densidade da Especie
    console.log("(CalculaSerService.calculaCerne) - Calculando Massa do Ser");
    resultado.massa = calc.multiplicaValorMag(resultado.altura, resultado.comprimento);
    resultado.massa = calc.multiplicaValorMag(resultado.massa, resultado.largura);
    resultado.massa = calc.multiplicaValorMag(resultado.massa, ser.identidade.especies[0].densidade); 
    console.log("(CalculaSerService.calculaCerne) - Fim da Massa do Ser: ", resultado.massa.toString());

    //Reacao = Vitalidade * coordenação
    console.log("(CalculaSerService.calculaCerne) - Calculando Reação do Ser: " + ser.atributos.materia.vitalidade.toString() + " * " + ser.atributos.destreza.coordenacao.toString()+ ")");
    resultado.reacao = calc.multiplicaValorMag(ser.atributos.materia.vitalidade, ser.atributos.destreza.coordenacao);
    console.log("(CalculaSerService.calculaCerne) - Reação do Ser: ", resultado.reacao.toString());

    //Tenacidade = ????????????????????????????????????????????
    resultado.tenacidade = new ValorMag();
    
    //Turno = valor minimo da especie dominante + 20% da maior especie
    var turnoMax = Math.max(...ser.identidade.especies.map(a => a.turno.max));
    console.log("(CalculaSerService.calculaCerne) - Calculando Turno do Ser: " + ser.identidade.especies[0].turno.min.toString() + " + (0.2 * " + turnoMax);
    resultado.turno = calc.numberToValorMag(turnoMax * 0.2);
    resultado.turno = calc.somaValorMag(calc.numberToValorMag(ser.identidade.especies[0].turno.min), resultado.turno);
    console.log("(CalculaSerService.calculaCerne) - Turno do Ser: ", resultado.turno.toString());

    console.log("(CalculaSerService.calculaCerne) - Fim do cálculo de Cerne:", resultado);
    return resultado;
  }

  calculaSubatributos(ser:Ser):Subatributos{
    console.log("(CalculaSerService.calculaSubatributos) - Iniciando calculo de subatributos do Ser");
    var calc = new CalculaNumeroService();
    var resultado = new Subatributos();

    //Anatomia = (Materia + Força + Destreza) /3
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Anatomia: (" + ser.atributos.materia.porcentagem.toString() + " + " + ser.atributos.forca.porcentagem.toString() + ") + " + ser.atributos.destreza.porcentagem.toString() + ") / 3");
    resultado.anatomia = calc.somaValorMag(ser.atributos.materia.porcentagem, ser.atributos.forca.porcentagem);
    resultado.anatomia = calc.somaValorMag(resultado.anatomia, ser.atributos.destreza.porcentagem);
    resultado.anatomia = calc.divideValorMag(resultado.anatomia, undefined, 3);
    console.log("(CalculaSerService.calculaSubatributos) - Anatomia calculado: ", resultado.anatomia.toString());

    //Animo = (Criatividade + Existencia)/2
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Ânimo: (" + ser.atributos.criatividade.porcentagem.toString() + " + " + ser.atributos.existencia.porcentagem.toString() + ") / 2");
    resultado.animo = calc.somaValorMag(ser.atributos.criatividade.porcentagem, ser.atributos.existencia.porcentagem);
    resultado.animo = calc.divideValorMag(resultado.animo, undefined, 2);
    console.log("(CalculaSerService.calculaSubatributos) - Ânimo calculado: ", resultado.animo.toString());
  
    //Autocontrole = (Intelecto + Existencia) / 2
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Autocontrole: (" + ser.atributos.intelecto.porcentagem.toString() + " + " + ser.atributos.existencia.porcentagem.toString() + ") / 2");
    resultado.autocontrole = calc.somaValorMag(ser.atributos.intelecto.porcentagem, ser.atributos.existencia.porcentagem);
    resultado.autocontrole = calc.divideValorMag(resultado.autocontrole, undefined, 2);
    console.log("(CalculaSerService.calculaSubatributos) - Autocontrole calculado: ", resultado.autocontrole.toString());
  
    //CP = todos os atributos somados
    console.log("(CalculaSerService.calculaSubatributos) - Calculando CP Bonus");
    var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
    resultado.bonusCP = calc.numberToValorMag(ser.atributos.forca.bonusCP + ser.atributos.destreza.bonusCP + ser.atributos.materia.bonusCP + ser.atributos.existencia.bonusCP + ser.atributos.ideia.bonusCP + ser.atributos.intelecto.bonusCP + ser.atributos.criatividade.bonusCP);
    console.log("(CalculaSerService.calculaSubatributos) - CP Bonus calculado:", resultado.bonusCP);

    //HP = Materia
    console.log("(CalculaSerService.calculaSubatributos) - Calculando HP Bonus");
    resultado.bonusHP = ser.atributos.materia.bonusHP;
    console.log("(CalculaSerService.calculaSubatributos) - HP Bonus calculado:", resultado.bonusHP);

    //MP = Criatividade + Ideia
    console.log("(CalculaSerService.calculaSubatributos) - Calculando MP Bonus: " + ser.atributos.criatividade.bonusMP.toString() + " + " + ser.atributos.ideia.bonusMP.toString());
    resultado.bonusMP = calc.somaValorMag(ser.atributos.criatividade.bonusMP, ser.atributos.ideia.bonusMP);
    console.log("(CalculaSerService.calculaSubatributos) - MP Bonus calculado:", resultado.bonusMP);

    //SP = ((15*(pontos de todos atributos-7))*7) (somar tracinhos)
    resultado.bonusSP = this.calculaBonusSP(ser);

    //Instinto = (Ideia + Destreza) / 2
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Instinto: (" + ser.atributos.ideia.porcentagem.toString() + " + " + ser.atributos.destreza.porcentagem.toString() + ") / 2");
    resultado.instinto = calc.somaValorMag(ser.atributos.ideia.porcentagem, ser.atributos.destreza.porcentagem);
    resultado.instinto = calc.divideValorMag(resultado.instinto, undefined, 2);
    console.log("(CalculaSerService.calculaSubatributos) - Instinto calculado: " + resultado.instinto.toString());

    //Movimento = (Destreza + Forca*2) /3
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Movimento: (" + ser.atributos.forca.porcentagem.toString() + "*2 + " + ser.atributos.destreza.porcentagem.toString() + ") / 3");
    resultado.movimento = calc.multiplicaValorMag(ser.atributos.forca.porcentagem, undefined, 2);
    resultado.movimento = calc.somaValorMag(resultado.movimento, ser.atributos.destreza.porcentagem);
    resultado.movimento = calc.divideValorMag(resultado.movimento, undefined, 3);
    console.log("(CalculaSerService.calculaSubatributos) - Movimento calculado: " + resultado.movimento.toString());
 
    //Precisao = (Forca + Destreza*2) / 3
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Precisão: (" + ser.atributos.destreza.porcentagem.toString() + "*2 + " + ser.atributos.forca.porcentagem.toString() + ") / 3");
    resultado.precisao = calc.multiplicaValorMag(ser.atributos.destreza.porcentagem, undefined, 2);
    resultado.precisao = calc.somaValorMag(resultado.precisao, ser.atributos.forca.porcentagem);
    resultado.precisao = calc.divideValorMag(resultado.precisao, undefined, 3);
    console.log("(CalculaSerService.calculaSubatributos) - Precisão calculada: " + resultado.movimento.toString());

    //Raciocinio = (Intelecto + Criatividade) / 2
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Raciocínio: (" + ser.atributos.intelecto.porcentagem.toString() + " + " + ser.atributos.criatividade.porcentagem.toString() + ") / 2");
    resultado.raciocinio = calc.somaValorMag(ser.atributos.intelecto.porcentagem, ser.atributos.criatividade.porcentagem);
    resultado.raciocinio = calc.divideValorMag(resultado.raciocinio, undefined, 2);
    console.log("(CalculaSerService.calculaSubatributos) - Raciocínio calculada: " + resultado.raciocinio.toString());

    //Subconsciencia = (Existencia + Ideia) / 2
    console.log("(CalculaSerService.calculaSubatributos) - Calculando Subconsciência: (" + ser.atributos.existencia.porcentagem.toString() + " + " + ser.atributos.ideia.porcentagem.toString() + ") / 2");
    resultado.subconsciencia = calc.somaValorMag(ser.atributos.existencia.porcentagem, ser.atributos.ideia.porcentagem);
    resultado.subconsciencia = calc.divideValorMag(resultado.subconsciencia, undefined, 2);
    console.log("(CalculaSerService.calculaSubatributos) - Subconsciência calculada: " + resultado.subconsciencia.toString());

    console.log("(CalculaSerService.calculaSubatributos) - Fim do cálculo de Subatributos:", resultado);
    return resultado;
  }

  calculaBonusSP(ser:Ser):ValorMag{
    console.log("(CalculaSerService.calculaBonusSP) - Calculando SP Bonus");
    var resultado = 0;
    var calc = new CalculaNumeroService();
    resultado = ser.atributos.forca.pontos + ser.atributos.destreza.pontos + ser.atributos.materia.pontos + ser.atributos.intelecto.pontos + ser.atributos.criatividade.pontos + ser.atributos.ideia.pontos + ser.atributos.existencia.pontos;
    resultado = (resultado - 7) * 105;
    resultado = resultado + ser.atributos.forca.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.destreza.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.materia.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.intelecto.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.criatividade.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.existencia.evolucao.pontosAtuais;
    resultado = resultado + ser.atributos.ideia.evolucao.pontosAtuais;
    var resultadoValorMag = calc.numberToValorMag(resultado);
    console.log("(CalculaSerService.calculaBonusSP) - SP Bonus calculado. Resultado em número: " + resultado + ". Resultado em ValorMag: " + resultadoValorMag.toString());
    return calc.numberToValorMag(resultado);
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
