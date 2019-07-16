import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoEmpresarialRoutingModule } from './proyecto-empresarial-routing.module';
import { ProyectoEmpresarialComponent } from './proyecto-empresarial.component';

@NgModule({
    imports: [CommonModule, ProyectoEmpresarialRoutingModule],
    declarations: [ProyectoEmpresarialComponent]
})
export class ProyectoEmpresarialModule {}
