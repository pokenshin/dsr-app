export class ValorMag{
    valor: number;
    magnitude: number;

    constructor(val?: number, mag?: number, texto?: string){
        if (texto && texto!=''){
            this.valor = +texto.split(',')[0];
            this.magnitude = +texto.split(',')[1];
        }else {
            this.valor = val || 0;
            this.magnitude = mag || 0;
        }
    }

    toString(){
        return this.valor + "m" + this.magnitude;
    }
}