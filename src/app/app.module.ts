import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FichaModule } from './ficha/ficha.module';
import { DebugModule } from './debug/debug.module';
import { ViewFichaComponent } from './ficha/view-ficha/view-ficha.component';
import { ViewDebugComponent } from './debug/view-debug/view-debug.component';
import { GeraInteiroService } from './shared/services/geradores/gera-inteiro.service';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    FichaModule,
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
