import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanMarcoFormacionComponent } from './plan-marco-formacion.component';

const routes: Routes = [
    {
        path: '',
        component: PlanMarcoFormacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanMarcoFormacionRoutingModule {}
