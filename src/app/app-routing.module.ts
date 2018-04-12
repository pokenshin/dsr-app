import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFichaComponent } from './ficha/view-ficha/view-ficha.component';
import { ViewDebugComponent } from './debug/view-debug/view-debug.component';

const appRoutes: Routes = [
    { path: 'ficha', component: ViewFichaComponent, data: { title: 'Ficha!'} },
    { path: 'debug', component: ViewDebugComponent, data: { title: 'Debug Page!'} },
    { path: '', redirectTo: '/ficha', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }