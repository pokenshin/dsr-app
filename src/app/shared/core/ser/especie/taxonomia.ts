export class Taxonomia {
    constructor(
        public id: number = 0,
        public reinoTaxo: string = '',
        public filoTaxo: string = '',
        public classeTaxo: string = '',
        public ordemTaxo: string = '',
        public familiaTaxo: string = '',
        public generoTaxo: string = '',
        public nomeCientifico: string = '',
        public nomePopular: string = '',
        public subClassificaoes: string[] = new Array<string>()
    ){}
    
}
