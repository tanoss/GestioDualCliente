import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import { PerfilesComponent } from 'app/components/perfiles/perfiles.component';
import { from } from 'rxjs';
import { PerfilData, PerfilData1 } from '../../../interfaces/app.dataSistemas.interface';
import { SistemasData } from '../../../interfaces/app.dataSistemas.interface';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-addperf',
  templateUrl: './addperf.component.html',
  styleUrls: ['./addperf.component.scss']
})
export class AddperfComponent implements OnInit {
  sistems: any = []

  centro: PerfilData1 = {
    perId: 0,
    perNombre: "",
    sisId: 0,
    sisNombre:""
  }


  public dataSave: any;

  //Success = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<AddperfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }

  ngOnInit() {
    this.listSystem();
  }

  // Método para Agregar un Centro de Gestión
  addPerfil() {
    this.Service.AddProfiles(this.centro)
      .subscribe((data: PerfilData) => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = data;
        console.log("Los datos agregados son:", this.dataSave);
        this.listSystem();
        this.dialogRef.close(this.dataSave);
      },
        error => {
          console.log("error al guardar", error);
          this.dialogRef.close(this.dataSave);
        });

  }

  listSystem() {
    this.Service.listSystem().subscribe((data: {}) => {
      console.log(data);
      this.sistems = data;
      console.log("listar sistema:", this.sistems);
      // this.dialogRef.close(this.sistems);
    });
  }


  // Cierre de Modal
  cerrarModal() {
    console.log("cerrarModal()");
    this.dialogRef.close(false);
  }

}
