import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeraInteiroService } from './services/geradores/geral';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ GeraInteiroService ]
    };
  }
}
