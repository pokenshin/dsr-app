import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { ViewFichaComponent } from './view-ficha/view-ficha.component';

const routes: Routes = [
    {
        path: '',
        component: ViewFichaComponent,
    },
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);