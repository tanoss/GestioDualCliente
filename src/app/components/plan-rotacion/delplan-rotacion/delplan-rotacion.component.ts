import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';

@Component({
  selector: 'app-delplan-rotacion',
  templateUrl: './delplan-rotacion.component.html',
  styleUrls: ['./delplan-rotacion.component.scss']
})
export class DelplanRotacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelplanRotacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }

  // Método para Borrar un Centro de Gestión
  borrarSistema(id: number){
    
    this.Service.deleteData(id,"rotation_plans").subscribe( () => {
      // this.cargarCentros();
      this.dialogRef.close("Plan de rotación Borrado!");
      console.log(this.data.id);
    });
    // this.onCloseConfirm();
  }
  
  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Borrar!');
  }


}

