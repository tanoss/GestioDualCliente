import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';

@Component({
  selector: 'app-delinf-tutor',
  templateUrl: './delinf-tutor.component.html',
  styleUrls: ['./delinf-tutor.component.scss']
})
export class DelinfTutorComponent implements OnInit {
  constructor(  
    public dialogRef: MatDialogRef<DelinfTutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }
 // Método para Borrar un Centro de Gestión
 borrarSistema(id: number){
  this.dialogRef.close("Informe de aprendizaje Borrado!");
  this.Service.deleteData( this.data.id,"business_project_plans").subscribe( () => {
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


