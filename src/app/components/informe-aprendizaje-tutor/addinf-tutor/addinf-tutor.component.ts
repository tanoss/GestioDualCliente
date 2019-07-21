import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData,InAprendizajeModel, fptrainingModel} from '../../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-addinf-tutor',
  templateUrl: './addinf-tutor.component.html',
  styleUrls: ['./addinf-tutor.component.scss']
})
export class AddinfTutorComponent implements OnInit {
  inaprendizaje: InAprendizajeModel;
  inaprendizajes:Array<InAprendizajeModel>;
publicdata
public dataSave: any;

  constructor(public dialogRef: MatDialogRef<AddinfTutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InAprendizajeModel,
    public dataService: RestService) { }

  ngOnInit() {
    this.inaprendizaje= new InAprendizajeModel();
    this.inaprendizajes = new  Array<InAprendizajeModel>()
  }
  addSistema() {
    //this.dataService.AddSystems({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':1}})
    this.dataService.addData({'business_project_plans':this.inaprendizaje,'training_framework_plans':{'id':this.inaprendizaje.fptraining.id}},'business_project_plans')
      .subscribe( response => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = response;
        console.log(this.inaprendizaje)
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
