import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { PlanProyectoEmpresarial } from '../modelos/PlanProyectoEmpresarial.model';


@Component({
  selector: 'app-proyecto-empresarial',
  templateUrl: './proyecto-empresarial.component.html',
  styleUrls: ['./proyecto-empresarial.component.scss']
})
export class ProyectoEmpresarialComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: PlanProyectoEmpresarial = {
    idPlanMarcoFormacion: 0,
    titulo: "",
    analisis: "",
    objetivo: "",
    descripcion: "",
    indicador: "",
    medicion: "",
    meta: "",
    fuenteDatos: "",
    presupuesto: 0,
    beneficiosEsperados: "",
    prioridad: 0,

  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: PlanProyectoEmpresarial) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: PlanProyectoEmpresarial) => {
        this.data = data; 
      },
        error => {
          console.log("error al guardar", error);
        });
  }

 borrarDatos(id: number){
    this.Service.deleteData(id,"/del" ).subscribe( () => {
      
      console.log(this.data.id);
    });
    // this.onCloseConfirm();
  }

actualizarDatos() {
    this.Service.updateData(this.data, "segupds")
      .subscribe(() => {
        
      }, error => {
        console.log("Error al actualizar", error);
      })
  }


   
}
