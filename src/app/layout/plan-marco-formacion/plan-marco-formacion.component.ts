import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { PlanMarcoFormacion } from '../modelos/planMarcoFormacion.model';

@Component({
  selector: 'app-plan-marco-formacion',
  templateUrl: './plan-marco-formacion.component.html',
  styleUrls: ['./plan-marco-formacion.component.scss']
})
export class PlanMarcoFormacionComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: PlanMarcoFormacion = {
    idSeguimiento: 0,
    prioridad: 0,
  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: PlanMarcoFormacion) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: PlanMarcoFormacion) => {
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
