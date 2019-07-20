import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestService } from '../../../service/rest.service';
import { SistemasData } from '../../../interfaces/app.dataSistemas.interface';
import { PerfilData, PerfilData1 } from '../../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-editperf',
  templateUrl: './editperf.component.html',
  styleUrls: ['./editperf.component.scss']
})
export class EditperfComponent implements OnInit {
sistems:any = []

  constructor(
    public dialogRef: MatDialogRef<EditperfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private Service: RestService
  ) { }

  ngOnInit() {

    console.log("La data que viene al editar es:", this.data.data);
    this.listSystem();
  }

  // Método para Actualizar un Centro de Gestión
  actualizarPerfil() {
    this.dialogRef.close("Perfil Guardado!");
    this.Service.upadateperfil(this.data.data)
    .subscribe( () =>{
      // console.log();
      }, error => {
        console.log("Error al actualizar",error); 
      })
  }

  listSystem() {
    this.Service.listSystem().subscribe((data: {}) => {
      console.log(data);
      this.sistems = data;
      console.log("listar sistema:", this.sistems);
      // this.dialogRef.close(this.sistems);
    });
  }
  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}
