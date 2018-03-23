export class Evolucao {
    pontosAtuais: number;
    multiplicador: number;
    chakraAberto: boolean;
    chakraNome: string;
    chakraMag: number;

    constructor(pontos?: number, multi?: number, chakraAb?:boolean, chakraNom?: string, chakraMg?: number){
        if (pontos && pontos < 15){
            this.pontosAtuais = pontos;
        }
        this.multiplicador = multi || 0;
        this.chakraAberto = chakraAb || false;
        this.chakraNome = chakraNom || "";
        this.chakraMag = chakraMg || 0;
    }
}
