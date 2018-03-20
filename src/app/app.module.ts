import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FichaModule } from './ficha/ficha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FichaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
