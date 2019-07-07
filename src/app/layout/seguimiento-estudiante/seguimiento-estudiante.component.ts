import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { SeguimientoEstudiante } from '../modelos/seguimientoEstudiante.model';

@Component({
  selector: 'app-seguimiento-estudiante',
  templateUrl: './seguimiento-estudiante.component.html',
  styleUrls: ['./seguimiento-estudiante.component.scss']
})
export class SeguimientoEstudianteComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: SeguimientoEstudiante = {
    idEstudiante: 0,
    idEntidadFormadora: 0,
    idPeriodoLectivo: 0,
    idPeriodoAcademico: 0,
    idTutorAcademico: 0,
    idTutorGeneral: 0,
    idtutorEspecifico: 0,
    coordinadorCarrera: "",
    fechaInicio: "",
    fechaFin: "",
    horasFormacion: 0,
  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: SeguimientoEstudiante) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: SeguimientoEstudiante) => {
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
