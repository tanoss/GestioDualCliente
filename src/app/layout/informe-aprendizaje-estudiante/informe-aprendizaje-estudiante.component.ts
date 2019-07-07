import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { InfAprendizajeEstudiante } from '../modelos/informeAprendizajeEstudiante.model';

@Component({
  selector: 'app-informe-aprendizaje-estudiante',
  templateUrl: './informe-aprendizaje-estudiante.component.html',
  styleUrls: ['./informe-aprendizaje-estudiante.component.scss']
})
export class InformeAprendizajeEstudianteComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: InfAprendizajeEstudiante = {
    idInformeAprendizaje: 0,
    descripcion: "",
    tipo: "",
    fecha: "",
    horaIngreso:"",
    horaSalida:"",
    horasTotales:"",
    prioridad: 0,
  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: InfAprendizajeEstudiante) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: InfAprendizajeEstudiante) => {
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
