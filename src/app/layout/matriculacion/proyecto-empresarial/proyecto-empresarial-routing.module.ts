import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoEmpresarialComponent  } from './proyecto-empresarial.component';

const routes: Routes = [
    {
        path: '',
        component: ProyectoEmpresarialComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProyectoEmpresarialRoutingModule {}
