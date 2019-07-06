import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRotacionRoutingModule } from './plan-rotacion-routing.module';
import { PlanRotacionComponent } from './plan-rotacion.component';

@NgModule({
    imports: [CommonModule, PlanRotacionRoutingModule],
    declarations: [PlanRotacionComponent]
})
export class PlanRotacionModule {}
