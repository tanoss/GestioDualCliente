import { Component, OnInit , Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';

@Component({
  selector: 'app-delinf-estudiante',
  templateUrl: './delinf-estudiante.component.html',
  styleUrls: ['./delinf-estudiante.component.scss']
})
export class DelinfEstudianteComponent implements OnInit {

  constructor(  
    public dialogRef: MatDialogRef<DelinfEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }
 // Método para Borrar un Centro de Gestión
 borrarSistema(id: number){
  
  this.Service.deleteData( id,"activitylearningreports").subscribe( () => {
    // this.cargarCentros();
    console.log(this.data.id);
    this.dialogRef.close("Informe de aprendizaje Borrado!");
  });
  // this.onCloseConfirm();
}

// Cierre Modal
cerrarModal(){
  this.dialogRef.close('Cierre de Modal Borrar!');
}


}

