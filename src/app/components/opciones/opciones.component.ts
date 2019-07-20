import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { OpcionData, OpcionData1 } from '../../interfaces/app.dataSistemas.interface';
import { RestService } from "../../service/rest.service"
import { BehaviorSubject } from 'rxjs'
import { AddopcComponent } from '../opciones/addopc/addopc.component';
import { DelopcComponent } from '../opciones/delopc/delopc.component';
import { EditopcComponent } from '../opciones/editopc/editopc.component';
import { filter } from 'rxjs/internal/operators/filter';
import {SistemasData} from '../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss']
})
export class OpcionesComponent implements OnInit, AfterViewInit {

  // Seting Angular Material
  displayedColumns: string[] = ['opcId', 'opcNombre', 'segSistemas', 'opcNivel', 'opcOrden', 'opcUrl', 'opciones'];

  public dataSource = new MatTableDataSource<OpcionData>();
  public data: any;

  //declaracion de dialogos
  FormAdd: MatDialogRef<AddopcComponent>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros: OpcionData[];
  index: number;
  id: number;

  constructor(private rest: RestService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.cargarOpciones();
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

  // Paginador de Tabla Centros
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


  // Carga de Listado de Opciones
  cargarOpciones() {
    console.log("cargarOpcion()");
    this.rest.getOpcion().subscribe((data: any) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
      //iniciamos dataSource
      this.setData();
    }, error => {
      console.log(error);
    });
  }

  // Agregar un Opcion
  addOpcion() {

    this.FormAdd = this.dialog.open(AddopcComponent, {
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
      this.pageRefresh();

      //al parecer el servicio no trae los datos actualizados, por ende agrego el registro con push al array
      //que estamos tomando como recurso para iniciar el dataSource

      // this.data.push(target);
      // this.setData();
    });
  }



  // Editar una opcion
  editarOpcion(opcion: OpcionData1) {
    const dialogRef = this.dialog.open(EditopcComponent, {
      width: '350px',
      data: {
        data: opcion
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log(result);
      let target: any = {};
      this.pageRefresh();
      // this.data.push(target);
      // this.setData();
    });
  }

  // Borrar una opcion
  deleteCentros(index: number, opcId: number, segOpcId: number, opcNombre: string, opcNivel: number,
    opcOrden: number, opcUrl: number, segSistemas: number) {

    this.index = index;
    this.id = opcId;
    const dialogRef = this.dialog.open(DelopcComponent, {
      width: '500px',
      data: {
        index: index,
        id: opcId,
        segOpcId: segOpcId,
        opcNombre: opcNombre,
        opcNivel: opcNivel,
        opcOrden: opcOrden,
        opcUrl: opcUrl,
        segSistemas: segSistemas
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      this.pageRefresh();
      console.log('Dialog closed');
      console.log(result);
    });
  }
  pageRefresh() {
    location.reload();
}}
