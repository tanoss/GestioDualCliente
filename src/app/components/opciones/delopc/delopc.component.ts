import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';


@Component({
  selector: 'app-delopc',
  templateUrl: './delopc.component.html',
  styleUrls: ['./delopc.component.scss']
})
export class DelopcComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelopcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centrosService: RestService
  ) { }


  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);

  }
  // Método para Borrar un Centro de Gestión
  borrarOpcion(id: number) {
    this.dialogRef.close("Opción Borrada!");
    this.centrosService.deleteOpcion(this.data.id).subscribe(() => {
      // this.cargarCentros();
      console.log(this.data.id);
    });
    // this.onCloseConfirm();
  }

  // Cierre Modal
  cerrarModal() {
    this.dialogRef.close('Cierre de Modal Borrar!');
  }


}
