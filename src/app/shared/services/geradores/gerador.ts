export interface Gerador {
    get(seed: number):any;
    getLista(seed: number, quantidade: number):any[];

}
