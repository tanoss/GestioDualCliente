import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData,PlanMarcoFormacionModel, fptrainingModel} from '../../../interfaces/app.dataSistemas.interface';


@Component({
  selector: 'app-addplan-marco-formacion',
  templateUrl: './addplan-marco-formacion.component.html',
  styleUrls: ['./addplan-marco-formacion.component.scss']
})
export class AddplanMarcoFormacionComponent implements OnInit {

  pmarcoformacion: PlanMarcoFormacionModel;
  pmarcoformacions:Array<PlanMarcoFormacionModel>;
publicdata
public dataSave: any;
// Success = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddplanMarcoFormacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanMarcoFormacionModel,
    public dataService: RestService) { }

  ngOnInit() {
    this.pmarcoformacion = new PlanMarcoFormacionModel();
    this.pmarcoformacions = new  Array<PlanMarcoFormacionModel>()
  }
  
  // Método para Agregar un Centro de Gestión
  addSistema() {
    //this.dataService.AddSystems({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':1}})
    this.dataService.addData({'objectives':this.pmarcoformacion,'training_framework_plans':{'id':this.pmarcoformacion.fptraining.id}},'objectives')
      .subscribe( response => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = response;
        console.log(this.pmarcoformacion)
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
