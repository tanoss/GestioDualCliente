import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'app/service/rest.service';
@Component({
  selector: 'app-editinf-estudiante',
  templateUrl: './editinf-estudiante.component.html',
  styleUrls: ['./editinf-estudiante.component.scss']
})
export class EditinfEstudianteComponent implements OnInit {

 
  sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditinfEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
//    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarInfomeEstudiante(id) {
    
    console.log("vas a imprimir",this.data.data);
    //this.dialogRef.close("Guardada!");
    //this.Service.updateData(this.data.data, "business_project_plans",id)
    this.Service.updateData({'Activity_learning_reports':this.data.data}, "activitylearningreports",id)
    .subscribe( () =>{
      console.log("vas a imprimir",this.data.data);
      this.dialogRef.close("Guardada!");
      }, error => {
        console.log("Error al actualizar",error);
      })
      
  }

  


  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}
