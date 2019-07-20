import { Component, OnInit, Inject, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { RestService } from '../../../service/rest.service';
import { OpcionData } from '../../../interfaces/app.dataSistemas.interface';
import { OpcionesComponent } from '../opciones.component';

@Component({
  selector: 'app-addopc',
  templateUrl: './addopc.component.html',
  styleUrls: ['./addopc.component.scss']
})
export class AddopcComponent implements OnInit {
  sistems: any = []

  cent: OpcionData = {
    opcId: 0,
    opcNombre: "",
    opcNivel: 0,
    opcOrden: 0,
    opcUrl: "",
    sisId: 0,
    sisNombre:""
    //opcImagen: ""
  }
  public dataSave: any;
  //Success = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<OpcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Service: RestService
  ) { }
  ngOnInit() {
    this.listSystem();
  }
  // Método para Agregar una opción
  addOpcion() {
    this.Service.AddOpc(this.data)
      .subscribe((data: OpcionData) => {
        //window.location.reload();
     
        this.dataSave = data;
        console.log("Los datos agregados son:", data);
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


