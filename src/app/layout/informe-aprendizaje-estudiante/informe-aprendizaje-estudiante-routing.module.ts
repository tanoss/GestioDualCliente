import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeAprendizajeEstudianteComponent } from './informe-aprendizaje-estudiante.component';

const routes: Routes = [
    {
        path: '',
        component: InformeAprendizajeEstudianteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformeAprendizajeEstudianteRoutingModule {}
