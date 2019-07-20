import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';
@Component({
  selector: 'app-delperf',
  templateUrl: './delperf.component.html',
  styleUrls: ['./delperf.component.scss']
})
export class DelperfComponent implements OnInit {


  
  constructor(
    public dialogRef: MatDialogRef<DelperfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }

  // Método para Borrar un Centro de Gestión
  borrarPerfil(id: number){
    this.dialogRef.close("Centro de Gestión Borrado!");
    this.Service.deleteProfil( this.data.id ).subscribe( () => {
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
