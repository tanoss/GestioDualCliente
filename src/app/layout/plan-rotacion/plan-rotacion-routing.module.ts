import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanRotacionComponent } from './plan-rotacion.component';

const routes: Routes = [
    {
        path: '',
        component: PlanRotacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRotacionRoutingModule {}
