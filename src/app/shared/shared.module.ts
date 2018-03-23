import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeraInteiroService } from './services/geradores/gera-inteiro.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ GeraInteiroService ]
    };
  }
}
