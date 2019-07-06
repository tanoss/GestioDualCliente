import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoEstudianteRoutingModule} from './seguimiento-estudiante-routing.module';
import { SeguimientoEstudianteComponent } from './seguimiento-estudiante.component';

@NgModule({
    imports: [CommonModule, SeguimientoEstudianteRoutingModule],
    declarations: [SeguimientoEstudianteComponent ]
})
export class SeguimientoEstudianteModule {}
