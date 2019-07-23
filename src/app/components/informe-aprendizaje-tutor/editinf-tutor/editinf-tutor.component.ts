import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'app/service/rest.service';
@Component({
  selector: 'app-editinf-tutor',
  templateUrl: './editinf-tutor.component.html',
  styleUrls: ['./editinf-tutor.component.scss']
})
export class EditinfTutorComponent implements OnInit {

  sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditinfTutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
//    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarInfometutor(id) {
    this.dialogRef.close("Guardada!");
    console.log("vas a imprimir",this.data.data);
    //this.Service.updateData(this.data.data, "business_project_plans",id)
    this.Service.updateData({'learning_reports':this.data.data}, "learningreports",id)
    .subscribe( () =>{
      console.log("vas a imprimir",this.data.data);
      }, error => {
        console.log("Error al actualizar",error);
      })
  }

  


  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}
