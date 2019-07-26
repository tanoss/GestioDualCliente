import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { SistemasData, EntidadData, PlanRotacionModel, Student } from '../../interfaces/app.dataSistemas.interface';
import { RestService } from "../../service/rest.service";
import { AddplanRotacionComponent } from '../plan-rotacion/addplan-rotacion/addplan-rotacion.component'
import { EditplanRotacionComponent } from '../plan-rotacion/editplan-rotacion/editplan-rotacion.component';
import { DelplanRotacionComponent } from '../plan-rotacion/delplan-rotacion/delplan-rotacion.component';
import { filter } from 'rxjs/internal/operators/filter';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-plan-rotacion',
  templateUrl: './plan-rotacion.component.html',
  styleUrls: ['./plan-rotacion.component.scss']
})
export class PlanRotacionComponent implements OnInit {

  centros: any;
  estudiantes: any =[];
  estudiante1: Student={
    id:0,
    identificacion:"",
    nombre:"",
    nombre2:"",
    apellido1:"",
    apellido2:"",
  }

  // Seting Angular Material
  displayedColumns: string[] = ['id','conocimientosTeoricos','conocimientosProcedimentales','conocimientosActitudinales','prioridad','fid','opciones'];
  public dataSource = new MatTableDataSource<PlanRotacionModel>();
  public data: any;

  //declaracion de dialogos
  FormAdd: MatDialogRef<AddplanRotacionComponent>
  FormDel: MatDialogRef<DelplanRotacionComponent>
  FormEdit: MatDialogRef<EditplanRotacionComponent>
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros: PlanRotacionModel[];
  index: number;
  id: number;

  constructor(private api: RestService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cargarCentros();
    this.cargarestudiante();
  }

  // Buscador/Filtro en Tabla
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if (this.dataSource.filteredData.length == 0) {
      this.mostrarMensajeFiltro = true;
    } else {
      this.mostrarMensajeFiltro = false;
    }
  }

  // Paginador de Tabla Sistemas
  ngAfterViewInit() {
    this.setPaginator();
  }

  setPaginator() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    const RangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    }

    this.paginator._intl.itemsPerPageLabel = 'Items por Página';
    this.paginator._intl.firstPageLabel = 'Primera Página';
    this.paginator._intl.previousPageLabel = 'Página Anterior';
    this.paginator._intl.nextPageLabel = 'Página Siguiente';
    this.paginator._intl.lastPageLabel = 'Última Página';
    this.paginator._intl.getRangeLabel = RangeLabel;
  }

  setData() {
    //tomar todo lo hay en data y llevarlo a dataSource
    console.log("creamos dataSource con data ->", this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.setPaginator();

  }


  // Carga de Listado de Centros de Gestión
  cargarCentros() {
    this.api.getData('rotation_plans').subscribe((data: any) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
      console.log("cargarCentros... " + this.data);
      //iniciamos dataSource
      this.setData();
    }, error => {
      console.log(error);
    });
  }
  cargarpr() {
    this.api.getData("rotation_plans").subscribe(
      (data: PlanRotacionModel[]) => {
        this.dataSource.data =data;
    }, error => {
      console.log(error);
    }
    );
  }
  cargarestudiante(){
    this.api.getData("business_project_plans/students").subscribe((data:{})=>{
      this.estudiantes = data
    })
  }

  donwloadPDF(){
    const doc = new jsPDF('p', 'mm', 'a3');
    doc.autoTable({html: '#reuniones'});
    doc.save('PlanRotacion.pdf');
    
  }

  // Agrega un Centro
  addCentros() {
    this.FormAdd = this.dialog.open(AddplanRotacionComponent, {
      width: '350px',
      data: {}
    });

    this.FormAdd.afterClosed().subscribe(res => {
      //recibe data desde dialogo add
      //controlar aquí si dialogo tiene algún error
      let target: any = {};
      target = res;

      //al parecer el servicio no trae los datos actualizados, por ende agrego el registro con push al array
      //que estamos tomando como recurso para iniciar el dataSource

      
      this.cargarpr();

    });


  }

  // Editar un Sistema
  editarCentro(centro: PlanRotacionModel) {
    const dialogRef = this.dialog.open(EditplanRotacionComponent, {
      width: '350px',
      data: {
        data: centro
      }
    });

    this.FormEdit.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log(result);
      let target: any = {};
      this.cargarpr();
      // this.data.push(target);
      // this.setData();

      // this.pageRefresh();
    });
  }

  // Borrar un Centro de Gestión
  // deleteCentros(index: number, id: number, descripcion: string, duenoObra: string, rut: string) {
  
 
  deleteCentros(index: number, id: number, titulo: string) {
    this.index = index;
    this.id = id;
    this.FormDel = this.dialog.open(DelplanRotacionComponent, {
      width: '500px',
      data: {
        index: index,
        id: id,
        descripcion: titulo,
      }
    });

    this.FormDel.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log(result);
      this.cargarpr();
      //this.pageRefresh();

    });
  }


}