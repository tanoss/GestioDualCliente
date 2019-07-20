
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MaterialModule } from 'app/module/material.module'
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { SistemasComponent } from 'app/components/sistemas/sistemas.component';
import { AddsisComponent } from 'app/components/sistemas/addsis/addsis.component';
import { DelsisComponent } from 'app/components/sistemas/delsis/delsis.component';
import { EditsisComponent } from 'app/components/sistemas/editsis/editsis.component';
import { OpcionesComponent } from 'app/components/opciones/opciones.component';
import { AddopcComponent } from 'app/components/opciones/addopc/addopc.component';
import { EditopcComponent } from 'app/components/opciones/editopc/editopc.component';
import { DelopcComponent } from 'app/components/opciones/delopc/delopc.component';
import { PerfilesComponent } from 'app/components/perfiles/perfiles.component';
import { AddperfComponent } from 'app/components/perfiles/addperf/addperf.component';
import { DelperfComponent } from 'app/components/perfiles/delperf/delperf.component';
import { EditperfComponent } from 'app/components/perfiles/editperf/editperf.component';
import { UsuarioComponent } from 'app/components/usuario/usuario.component';
import { ConfiguracionesComponent } from 'app/components/configuraciones/configuraciones.component';
import { InformeAprendizajeEstudianteComponent } from 'app/components/informe-aprendizaje-estudiante/informe-aprendizaje-estudiante.component';
import { InformeAprendizajeTutorComponent } from 'app/components/informe-aprendizaje-tutor/informe-aprendizaje-tutor.component';
import { PlanMarcoFormacionComponent } from 'app/components/plan-marco-formacion/plan-marco-formacion.component';
import { PlanRotacionComponent } from 'app/components/plan-rotacion/plan-rotacion.component';
import { ProyectoEmpresarialComponent } from 'app/components/proyecto-empresarial/proyecto-empresarial.component';
import { SeguimientoEstudianteComponent } from 'app/components/seguimiento-estudiante/seguimiento-estudiante.component';
import { AddinfEstudianteComponent } from 'app/components/informe-aprendizaje-estudiante/addinf-estudiante/addinf-estudiante.component';
import { EditinfEstudianteComponent } from 'app/components/informe-aprendizaje-estudiante/editinf-estudiante/editinf-estudiante.component';
import { DelinfEstudianteComponent } from 'app/components/informe-aprendizaje-estudiante/delinf-estudiante/delinf-estudiante.component';
import { AddinfTutorComponent } from 'app/components/informe-aprendizaje-tutor/addinf-tutor/addinf-tutor.component';
import { EditinfTutorComponent } from 'app/components/informe-aprendizaje-tutor/editinf-tutor/editinf-tutor.component';
import { DelinfTutorComponent } from 'app/components/informe-aprendizaje-tutor/delinf-tutor/delinf-tutor.component';
import { AddplanMarcoFormacionComponent } from 'app/components/plan-marco-formacion/addplan-marco-formacion/addplan-marco-formacion.component';
import { DelplanMarcoFormacionComponent } from 'app/components/plan-marco-formacion/delplan-marco-formacion/delplan-marco-formacion.component';
import { EditplanMarcoFormacionComponent } from 'app/components/plan-marco-formacion/editplan-marco-formacion/editplan-marco-formacion.component';
import { AddplanRotacionComponent } from 'app/components/plan-rotacion/addplan-rotacion/addplan-rotacion.component';
import { EditplanRotacionComponent } from 'app/components/plan-rotacion/editplan-rotacion/editplan-rotacion.component';
import { DelplanRotacionComponent } from 'app/components/plan-rotacion/delplan-rotacion/delplan-rotacion.component';
import { AddproyectoEmpresarialComponent } from 'app/components/proyecto-empresarial/addproyecto-empresarial/addproyecto-empresarial.component';
import { EditproyectoEmpresarialComponent } from 'app/components/proyecto-empresarial/editproyecto-empresarial/editproyecto-empresarial.component';
import { DelproyectoEmpresarialComponent } from 'app/components/proyecto-empresarial/delproyecto-empresarial/delproyecto-empresarial.component';
import { AddseguimientoEstudianteComponent } from 'app/components/seguimiento-estudiante/addseguimiento-estudiante/addseguimiento-estudiante.component';
import { EditseguimientoEstudianteComponent } from 'app/components/seguimiento-estudiante/editseguimiento-estudiante/editseguimiento-estudiante.component';
import { DelseguimientoEstudianteComponent } from 'app/components/seguimiento-estudiante/delseguimiento-estudiante/delseguimiento-estudiante.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    SistemasComponent,
    AddsisComponent,
    DelsisComponent,
    EditsisComponent,
    OpcionesComponent,
    AddopcComponent,
    EditopcComponent,
    DelopcComponent,
    PerfilesComponent,
    AddperfComponent,
    DelperfComponent,
    EditperfComponent,
    UsuarioComponent,
    ConfiguracionesComponent,
    InformeAprendizajeEstudianteComponent,
    InformeAprendizajeTutorComponent,
    PlanMarcoFormacionComponent,
    PlanRotacionComponent,
    ProyectoEmpresarialComponent,
    SeguimientoEstudianteComponent,
    AddinfEstudianteComponent,
    EditinfEstudianteComponent,
    DelinfEstudianteComponent,
    AddinfTutorComponent,
    EditinfTutorComponent,
    DelinfTutorComponent,
    AddplanMarcoFormacionComponent,
    DelplanMarcoFormacionComponent,
    EditplanMarcoFormacionComponent,
    AddplanRotacionComponent,
    EditplanRotacionComponent,
    DelplanRotacionComponent,
    AddproyectoEmpresarialComponent,
    EditproyectoEmpresarialComponent,
    DelproyectoEmpresarialComponent,
    AddseguimientoEstudianteComponent,
    EditseguimientoEstudianteComponent,
    DelseguimientoEstudianteComponent
  ],
  entryComponents: [
    AddsisComponent,
    DelsisComponent,
    EditsisComponent,
    AddperfComponent,
    DelperfComponent,
    EditperfComponent,
    EditopcComponent,
    AddopcComponent,
    DelopcComponent,
    AddinfEstudianteComponent,
    EditinfEstudianteComponent,
    DelinfEstudianteComponent,
    AddinfTutorComponent,
    EditinfTutorComponent,
    DelinfTutorComponent,
    AddplanMarcoFormacionComponent,
    DelplanMarcoFormacionComponent,
    EditplanMarcoFormacionComponent,
    AddplanRotacionComponent,
    EditplanRotacionComponent,
    DelplanRotacionComponent,
    AddproyectoEmpresarialComponent,
    EditproyectoEmpresarialComponent,
    DelproyectoEmpresarialComponent,
    AddseguimientoEstudianteComponent,
    EditseguimientoEstudianteComponent,
    DelseguimientoEstudianteComponent
  ]
})

export class AdminLayoutModule { }
