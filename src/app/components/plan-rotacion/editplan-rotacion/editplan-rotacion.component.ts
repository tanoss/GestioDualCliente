import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-editplan-rotacion',
  templateUrl: './editplan-rotacion.component.html',
  styleUrls: ['./editplan-rotacion.component.scss']
})
export class EditplanRotacionComponent implements OnInit {

 
  sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditplanRotacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
//    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarPlanRotacion(id) {
    this.dialogRef.close("Guardada!");
    console.log("vas a imprimir",this.data.data);
    //this.Service.updateData(this.data.data, "business_project_plans",id)
    this.Service.updateData({'rotation_plans':this.data.data}, "rotation_plans",id)
    .subscribe( () =>{
      console.log("vas a imprimir",this.data.data);
      }, error => {
        console.log("Error al actualizar",error);
      })
  }

  // listSystem() {
  //   this.Service.listSystem().subscribe((data: {}) => {
  //     console.log(data);
  //     this.sistems = data;
  //     console.log("listar sistema:", this.sistems);
  //     // this.dialogRef.close(this.sistems);
  //   });
  // }



  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}
