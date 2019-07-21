import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from 'app/service/rest.service';
import { Systems } from 'app/models/issue';
import { FormControl, Validators } from '@angular/forms';
import {SistemasComponent} from 'app/components/sistemas/sistemas.component';
import { from } from 'rxjs';
import { SistemasData,InAprendizajeModel, InAprendizajeEstuModel} from '../../../interfaces/app.dataSistemas.interface';


@Component({
  selector: 'app-addinf-estudiante',
  templateUrl: './addinf-estudiante.component.html',
  styleUrls: ['./addinf-estudiante.component.scss']
})
export class AddinfEstudianteComponent implements OnInit {
  inEstuaprendizaje: InAprendizajeEstuModel;
  inEstuaprendizajes:Array<InAprendizajeEstuModel>;
publicdata
public dataSave: any;

  constructor(public dialogRef: MatDialogRef<AddinfEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InAprendizajeModel,
    public dataService: RestService) { }

  ngOnInit() {
    // se va al html
    this.inEstuaprendizaje= new InAprendizajeEstuModel();
    this.inEstuaprendizajes = new  Array<InAprendizajeEstuModel>()
  }
  addSistema() {
    //this.dataService.AddSystems({'business_project_plans':this.ppempresarial,'training_framework_plans':{'id':1}})
    this.dataService.addData({'business_project_plans':this.inEstuaprendizaje,'training_framework_plans':{'id':this.inEstuaprendizaje.inftutor.id}},'business_project_plans')
      .subscribe( response => {
        // window.location.reload();
        // this.cargarCentros();
        this.dataSave = response;
        console.log(this.inEstuaprendizaje)
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
