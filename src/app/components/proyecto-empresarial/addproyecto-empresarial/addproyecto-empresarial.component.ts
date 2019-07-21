import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData,PpempresarialModel, fptrainingModel} from '../../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-addproyecto-empresarial',
  templateUrl: './addproyecto-empresarial.component.html',
  styleUrls: ['./addproyecto-empresarial.component.scss']
})
export class AddproyectoEmpresarialComponent implements OnInit {
  ppempresarial: PpempresarialModel;
  ppempresarials:Array<PpempresarialModel>;
publicdata
public dataSave: any;
// Success = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddproyectoEmpresarialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PpempresarialModel,
    public dataService: RestService) { }

  ngOnInit() {
    this.ppempresarial = new PpempresarialModel();
    this.ppempresarials = new  Array<PpempresarialModel>()
  }
  
  // Método para Agregar un Centro de Gestión
  addSistema() {
    //this.dataService.AddSystems({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':1}})
    this.dataService.addData({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':this.ppempresarial.fptraining.id}},'business_project_plans')
      .subscribe( response => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = response;
        console.log(this.ppempresarial)
        console.log("Los datos agregados son:", response);
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
