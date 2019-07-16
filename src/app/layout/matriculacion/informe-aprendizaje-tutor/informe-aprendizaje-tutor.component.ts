import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { InfAprendizajeTutor } from '../modelos/informeAprendizajeTutor.model';

@Component({
  selector: 'app-informe-aprendizaje-tutor',
  templateUrl: './informe-aprendizaje-tutor.component.html',
  styleUrls: ['./informe-aprendizaje-tutor.component.scss']
})
export class InformeAprendizajeTutorComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: InfAprendizajeTutor = {
    idPlanMarcoFormacion: 0,
    semana: 0,
    calificacion: 0,
    fechaEntrega: "",
    reflexion: "",
    observaciones:"",
    prioridad: 0,
  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: InfAprendizajeTutor) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: InfAprendizajeTutor) => {
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
