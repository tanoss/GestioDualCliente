import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeAprendizajeTutorRoutingModule } from './informe-aprendizaje-tutor-routing.module';
import { InformeAprendizajeTutorComponent } from './informe-aprendizaje-tutor.component';

@NgModule({
    imports: [CommonModule, InformeAprendizajeTutorRoutingModule],
    declarations: [InformeAprendizajeTutorComponent]
})
export class InformeAprendizajeTutorModule {}
