import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeAprendizajeTutorComponent } from './informe-aprendizaje-tutor.component';

const routes: Routes = [
    {
        path: '',
        component: InformeAprendizajeTutorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformeAprendizajeTutorRoutingModule {}
