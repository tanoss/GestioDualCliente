import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import {PerfilesComponent} from 'app/components/perfiles/perfiles.component';
import {OpcionesComponent} from 'app/components/opciones/opciones.component';
import {UsuarioComponent} from 'app/components/usuario/usuario.component';
import {ConfiguracionesComponent} from 'app/components/configuraciones/configuraciones.component';
import { InformeAprendizajeEstudianteComponent } from 'app/components/informe-aprendizaje-estudiante/informe-aprendizaje-estudiante.component';
import { InformeAprendizajeTutorComponent } from 'app/components/informe-aprendizaje-tutor/informe-aprendizaje-tutor.component';
import { PlanMarcoFormacionComponent } from 'app/components/plan-marco-formacion/plan-marco-formacion.component';
import { PlanRotacionComponent } from 'app/components/plan-rotacion/plan-rotacion.component';
import { ProyectoEmpresarialComponent } from 'app/components/proyecto-empresarial/proyecto-empresarial.component';
import { SeguimientoEstudianteComponent } from 'app/components/seguimiento-estudiante/seguimiento-estudiante.component';
export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sistemas', component: SistemasComponent },
    { path: 'perfiles', component: PerfilesComponent },
    { path: 'opciones', component: OpcionesComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'configuraciones', component: ConfiguracionesComponent },
    { path: 'informe-aprendizaje-estudiante', component:InformeAprendizajeEstudianteComponent },
    { path: 'informe-aprendizaje-tutor', component: InformeAprendizajeTutorComponent },
    { path: 'plan-marco-formacion', component: PlanMarcoFormacionComponent },
    { path: 'plan-rotacion', component: PlanRotacionComponent },
    { path: 'proyecto-empresarial', component: ProyectoEmpresarialComponent },
    { path: 'seguimiento-estudiante', component: SeguimientoEstudianteComponent },

];
