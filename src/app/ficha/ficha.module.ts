import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentidadeComponent } from './identidade/identidade.component';
import { AtributosComponent } from './atributos/atributos.component';
import { EnergiasComponent } from './energias/energias.component';
import { SubatributosComponent } from './subatributos/subatributos.component';
import { CombateComponent } from './combate/combate.component';
import { DeslocamentoComponent } from './deslocamento/deslocamento.component';

import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ViewFichaComponent } from './view-ficha/view-ficha.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatGridListModule, BrowserAnimationsModule, MatExpansionModule, MatProgressBarModule, MatCardModule, MatButtonModule, MatTableModule],
  declarations: [IdentidadeComponent, AtributosComponent, EnergiasComponent, SubatributosComponent, CombateComponent, DeslocamentoComponent, ViewFichaComponent],
  exports: [IdentidadeComponent, AtributosComponent, EnergiasComponent, SubatributosComponent, CombateComponent, DeslocamentoComponent]
})
export class FichaModule { }
