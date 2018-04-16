import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRouting } from './ficha.routing';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

import { ViewFichaComponent } from './view-ficha/view-ficha.component';
import { IdentidadeComponent } from './identidade/identidade.component';
import { AtributosComponent } from './atributos/atributos.component';
import { EnergiasComponent } from './energias/energias.component';
import { SubatributosComponent } from './subatributos/subatributos.component';
import { CombateComponent } from './combate/combate.component';
import { DeslocamentoComponent } from './deslocamento/deslocamento.component';

@NgModule({
  imports: [CommonModule, MatChipsModule, MatTooltipModule, MatInputModule, MatGridListModule, BrowserAnimationsModule, MatExpansionModule, MatProgressBarModule, MatCardModule, MatButtonModule, MatTableModule, ModuleRouting],
  declarations: [IdentidadeComponent, AtributosComponent, EnergiasComponent, SubatributosComponent, CombateComponent, DeslocamentoComponent, ViewFichaComponent],
  exports: [IdentidadeComponent, AtributosComponent, EnergiasComponent, SubatributosComponent, CombateComponent, DeslocamentoComponent, ViewFichaComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FichaModule { }
