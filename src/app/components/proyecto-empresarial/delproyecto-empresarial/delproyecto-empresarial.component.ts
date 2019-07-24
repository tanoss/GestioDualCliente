import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';

@Component({
  selector: 'app-delproyecto-empresarial',
  templateUrl: './delproyecto-empresarial.component.html',
  styleUrls: ['./delproyecto-empresarial.component.scss']
})
export class DelproyectoEmpresarialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelproyectoEmpresarialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }

  // Método para Borrar un Centro de Gestión
  borrarSistema(id: number){
    //this.dialogRef.close(" Borrado!");
    this.Service.deleteData(id,"business_project_plans").subscribe( () => {
      this.dialogRef.close(" Borrado!");
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

