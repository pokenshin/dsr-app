import { Injectable } from '@angular/core';
import { Forca } from '../../classes/atributos/forca';

@Injectable()
export class GeraAtributoService {
  

  constructor() { }

  geraForca(): Forca{
    return new Forca();
  }

}
