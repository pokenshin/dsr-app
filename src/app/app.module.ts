import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';

import { FichaModule } from './ficha/ficha.module';
import { DebugModule } from './debug/debug.module';
import { ViewFichaComponent } from './ficha/view-ficha/view-ficha.component';
import { ViewDebugComponent } from './debug/view-debug/view-debug.component';

const appRoutes: Routes = [
  { path: 'ficha', component: ViewFichaComponent, data: { title: 'Ficha!'} },
  { path: 'debug', component: ViewDebugComponent, data: { title: 'Debug Page!'} },
  { path: '', redirectTo: '/ficha', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    FichaModule,
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
