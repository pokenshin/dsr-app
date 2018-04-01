import { ElementoAcido, ElementoAgua, ElementoAr, ElementoCorrosao, ElementoCosmo, ElementoCristal, ElementoEletricidade, ElementoEntropia, ElementoEscuridao, ElementoExplosao, ElementoFogo, ElementoGas, ElementoGeena, ElementoGravidade, ElementoLuz, ElementoMadeira, ElementoMagma, ElementoOleo, ElementoOnda, ElementoRadiacao, ElementoRocha, ElementoTerra, ElementoVida } from "../ciencias/elementais";

export class Elementais {
    constructor(
        public acido: ElementoAcido = new ElementoAcido(),
        public agua: ElementoAgua = new ElementoAgua(),
        public ar: ElementoAr = new ElementoAr(),
        public corrosao: ElementoCorrosao = new ElementoCorrosao(),
        public cosmo: ElementoCosmo = new ElementoCosmo(),
        public cristal: ElementoCristal = new ElementoCristal(),
        public eletricidade: ElementoEletricidade = new ElementoEletricidade(),
        public entropia: ElementoEntropia = new ElementoEntropia(),
        public escuridao: ElementoEscuridao = new ElementoEscuridao(),
        public explosao: ElementoExplosao = new ElementoExplosao(),
        public fogo: ElementoFogo = new ElementoFogo(),
        public gas: ElementoGas = new ElementoGas(),
        public geena: ElementoGeena = new ElementoGeena(),
        public gravidade: ElementoGravidade = new ElementoGravidade(),
        public luz: ElementoLuz = new ElementoLuz(),
        public madeira: ElementoMadeira = new ElementoMadeira(),
        public magma: ElementoMagma = new ElementoMagma(),
        public oleo: ElementoOleo = new ElementoOleo(),
        public onda: ElementoOnda = new ElementoOnda(),
        public radiacao: ElementoRadiacao = new ElementoRadiacao(),
        public rocha: ElementoRocha = new ElementoRocha(),
        public terra: ElementoTerra = new ElementoTerra(),
        public vida: ElementoVida = new ElementoVida()
    ){}
}
