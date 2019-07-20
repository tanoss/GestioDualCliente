import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData,PlanRotacionModel, fptrainingModel} from '../../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-addplan-rotacion',
  templateUrl: './addplan-rotacion.component.html',
  styleUrls: ['./addplan-rotacion.component.scss']
})
export class AddplanRotacionComponent implements OnInit {

  protacion: PlanRotacionModel;
  protacions:Array<PlanRotacionModel>;
publicdata
public dataSave: any;
// Success = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddplanRotacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanRotacionModel,
    public dataService: RestService) { }

  ngOnInit() {
    this.protacion = new PlanRotacionModel();
    this.protacions = new  Array<PlanRotacionModel>()
  }
  
  // Método para Agregar un Centro de Gestión
  addSistema() {
    //this.dataService.AddSystems({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':1}})
    this.dataService.addData({'rotation_plans':this.protacion,'training_framework_plans':{'id':this.protacion.fptraining.id}},'rotation_plans')
      .subscribe( response => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = response;
        console.log(this.protacion)
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
