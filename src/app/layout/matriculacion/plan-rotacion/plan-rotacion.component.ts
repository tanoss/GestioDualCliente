import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { PlanRotacion } from '../modelos/planRotacion.model';
@Component({
  selector: 'app-plan-rotacion',
  templateUrl: './plan-rotacion.component.html',
  styleUrls: ['./plan-rotacion.component.scss']
})
export class PlanRotacionComponent implements OnInit {

  constructor(private Service: RestService) { }

  ngOnInit() {
  }

  public data: any;

  infest: PlanRotacion = {
    idPlanMarcoFormacion: 0,
    conocimientosTeoricos: "",
    conocimientosProcedimentales: "",
    conocimientosActitudinales: "",
    prioridad: 0,

  }


  cargarDatos() {
    this.Service.getData("segs").subscribe((data: PlanRotacion) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  agregarDatos() {
    this.Service.addData(this.infest, "segadds")
      .subscribe((data: PlanRotacion) => {
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
