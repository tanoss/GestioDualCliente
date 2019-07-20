import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';
@Component({
  selector: 'app-editsis',
  templateUrl: './editsis.component.html',
  styleUrls: ['./editsis.component.scss']
})
export class EditsisComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditsisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
  }

  // Método para Actualizar un Centro de Gestión
  actualizarSistema() {
    this.dialogRef.close("Sistema Guardado!");
    this.Service.upadatesistema(this.data.data)
    .subscribe( () =>{
      // console.log();
      }, error => {
        console.log("Error al actualizar",error);
      })
  }

  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}
