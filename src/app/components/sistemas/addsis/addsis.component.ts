import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData} from '../../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-addsis',
  templateUrl: './addsis.component.html',
  styleUrls: ['./addsis.component.scss']
})
export class AddsisComponent implements OnInit {

sistema: SistemasData = {
 sisId: 0,
 sisNombre: "",
  sisUrlSistema: "",
  sis_estado: true
 }
public dataSave: any;
// Success = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddsisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Systems,
    public dataService: RestService) { }

  ngOnInit() {}

  // Método para Agregar un Centro de Gestión
  addSistema() {
    this.dataService.AddSystems(this.sistema)
      .subscribe((data: SistemasData) => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = data;
        console.log("Los datos agregados son:", data);
        this.dialogRef.close(this.dataSave);
      },
        error => {
          console.log("error al guardar", error);
          this.dialogRef.close(this.dataSave);
        });

  }

  // Cierre de Modal
  cerrarModal() {
    console.log("cerrarModal()");
    this.dialogRef.close(false);
  }

}
