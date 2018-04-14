import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFichaComponent } from './ficha/view-ficha/view-ficha.component';
import { ViewDebugComponent } from './debug/view-debug/view-debug.component';

const appRoutes: Routes = [
    //{ path: 'ficha', loadChildren: 'ficha/ficha.module#FichaModule'},
    { path: 'ficha', component: ViewFichaComponent},
    { path: '', redirectTo: '/ficha', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }