import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { SistemasData, PlanMarcoFormacionModel } from '../../interfaces/app.dataSistemas.interface';
import { RestService } from "../../service/rest.service";
import { filter } from 'rxjs/internal/operators/filter';
import { AddplanMarcoFormacionComponent } from './addplan-marco-formacion/addplan-marco-formacion.component';
import { EditplanMarcoFormacionComponent } from './editplan-marco-formacion/editplan-marco-formacion.component';
import { DelplanMarcoFormacionComponent } from './delplan-marco-formacion/delplan-marco-formacion.component';
@Component({
  selector: 'app-plan-marco-formacion',
  templateUrl: './plan-marco-formacion.component.html',
  styleUrls: ['./plan-marco-formacion.component.scss']
})
export class PlanMarcoFormacionComponent implements OnInit {

  centros: any;

  // Seting Angular Material
  displayedColumns: string[] = ['id','descripcion','nivelLogroEsperado','nivelLogroAlcanzado','tareas','puestoAprendizaje','semanasTrabajo','semana','responsable','prioridad','fid','opciones'];
  public dataSource = new MatTableDataSource<PlanMarcoFormacionModel>();
  public data: any;

  //declaracion de dialogos
  FormAdd: MatDialogRef<AddplanMarcoFormacionComponent>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros: PlanMarcoFormacionModel[];
  index: number;
  id: number;

  constructor(private api: RestService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cargarCentros();
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
    this.api.getData('objectives').subscribe((data: any) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
      console.log("cargarCentros... " + this.data);
      //iniciamos dataSource
      this.setData();
    }, error => {
      console.log(error);
    });
  }

  // Agrega un Centro
  addCentros() {

    this.FormAdd = this.dialog.open(AddplanMarcoFormacionComponent, {
      width: '350px',
      data: {}
    });

    this.FormAdd.afterClosed().pipe(
      filter(res => res)
    ).subscribe(res => {
      //recibe data desde dialogo add
      //controlar aquí si dialogo tiene algún error
      let target: any = {};
      target = res;

      //al parecer el servicio no trae los datos actualizados, por ende agrego el registro con push al array
      //que estamos tomando como recurso para iniciar el dataSource

      this.data.push(target);
      this.setData();

    });


  }

  // Editar un Sistema
  editarCentro(centro: SistemasData) {
    const dialogRef = this.dialog.open(EditplanMarcoFormacionComponent, {
      width: '350px',
      data: {
        data: centro
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log(result);
      let target: any = {};
      
      this.data.push(target);
      this.setData();

      // this.pageRefresh();
    });
  }

  // Borrar un Centro de Gestión
  // deleteCentros(index: number, id: number, descripcion: string, duenoObra: string, rut: string) {
  deleteCentros(index: number, id: number, descripcion: string, ) {
    this.index = index;
    this.id = id;
    const dialogRef = this.dialog.open(DelplanMarcoFormacionComponent, {
      width: '500px',
      data: {
        index: index,
        id: id,
        descripcion: descripcion,
        
      }


    });

    //   dialogRef.afterClosed().subscribe(result => {
    //    this.refreshTable();
    //   });
    // }
    // private refreshTable() {
    //   //this.paginator._changePageSize(this.paginator.pageSize);
    //   this.dataSource.paginator = this.paginator;

    // }

    // pageRefresh(){
    //   location.reload();
    // }


    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log(result);
      //this.pageRefresh();

    });
  }
  pageRefresh() {
    location.reload();
  }
}