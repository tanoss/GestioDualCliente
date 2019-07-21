import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';

@Component({
  selector: 'app-delplan-marco-formacion',
  templateUrl: './delplan-marco-formacion.component.html',
  styleUrls: ['./delplan-marco-formacion.component.scss']
})
export class DelplanMarcoFormacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelplanMarcoFormacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }

  // Método para Borrar un Centro de Gestión
  borrarSistema(id: number){
    this.dialogRef.close("Centro de Gestión Borrado!");
    this.Service.deleteData( this.data.id,"objectives").subscribe( () => {
      // this.cargarCentros();
      console.log(this.data.id);
    });
    // this.onCloseConfirm();
  }

  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Borrar!');
  }
}