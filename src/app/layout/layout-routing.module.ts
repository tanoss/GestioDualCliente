import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'forms', loadChildren: './form/form.module#FormModule'},
      {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
      {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
      {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
      {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'},
      {path: 'plan-rotacion', loadChildren: './matriculacion/plan-rotacion/plan-rotacion.module#PlanRotacionModule'},
      {path: 'proyecto-empresarial', loadChildren: './matriculacion/proyecto-empresarial/proyecto-empresarial.module#ProyectoEmpresarialModule'},
      {path: 'seguimiento-estudiante', loadChildren: './matriculacion/seguimiento-estudiante/seguimiento-estudiante.module#SeguimientoEstudianteModule'},
      {path: 'plan-marco-formacion', loadChildren: './matriculacion/plan-marco-formacion/plan-marco-formacion.module#PlanMarcoFormacionModule'},
      {path: 'informe-aprendizaje-estudiante', loadChildren: './matriculacion/informe-aprendizaje-estudiante/informe-aprendizaje-estudiante.module#InformeAprendizajeEstudianteModule'},
      {path: 'informe-aprendizaje-tutor', loadChildren: './matriculacion/informe-aprendizaje-tutor/informe-aprendizaje-tutor.module#InformeAprendizajeTutorModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
