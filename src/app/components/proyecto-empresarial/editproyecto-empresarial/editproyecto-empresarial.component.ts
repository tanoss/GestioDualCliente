import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-editproyecto-empresarial',
  templateUrl: './editproyecto-empresarial.component.html',
  styleUrls: ['./editproyecto-empresarial.component.scss']
})
export class EditproyectoEmpresarialComponent implements OnInit {

  sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditproyectoEmpresarialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
//    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarProyEmpresarial() {
    this.dialogRef.close("Guardada!");
    this.Service.updateData(this.data.data, "business_project_plans")
    .subscribe( () =>{
      // console.log();
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
