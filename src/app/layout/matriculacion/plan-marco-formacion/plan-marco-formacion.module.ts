import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMarcoFormacionRoutingModule } from './plan-marco-formacion-routing.module';
import { PlanMarcoFormacionComponent } from './plan-marco-formacion.component';

@NgModule({
    imports: [CommonModule, PlanMarcoFormacionRoutingModule],
    declarations: [PlanMarcoFormacionComponent]
})
export class PlanMarcoFormacionModule {}
