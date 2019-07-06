import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeAprendizajeEstudianteRoutingModule } from './informe-aprendizaje-estudiante-routing.module';
import { InformeAprendizajeEstudianteComponent } from './informe-aprendizaje-estudiante.component';

@NgModule({
    imports: [CommonModule, InformeAprendizajeEstudianteRoutingModule],
    declarations: [InformeAprendizajeEstudianteComponent]
})
export class InformeAprendizajeEstudianteModule {}
