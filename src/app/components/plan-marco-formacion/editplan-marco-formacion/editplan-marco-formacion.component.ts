import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editplan-marco-formacion',
  templateUrl: './editplan-marco-formacion.component.html',
  styleUrls: ['./editplan-marco-formacion.component.scss']
})
export class EditplanMarcoFormacionComponent implements OnInit {

  sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditplanMarcoFormacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
//    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarPlanMarco(id) {
    //this.dialogRef.close("Guardada!");
    this.Service.updateData({'objectives':this.data.data}, "objectives",id)
    .subscribe( () =>{
      // console.log();
      this.dialogRef.close("Guardada!");
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
