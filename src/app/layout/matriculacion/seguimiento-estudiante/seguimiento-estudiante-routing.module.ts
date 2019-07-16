import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguimientoEstudianteComponent  } from './seguimiento-estudiante.component';

const routes: Routes = [
    {
        path: '',
        component: SeguimientoEstudianteComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeguimientoEstudianteRoutingModule {}
