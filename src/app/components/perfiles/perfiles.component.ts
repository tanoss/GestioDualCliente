import { Component, OnInit,ViewChild, AfterViewInit, } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { PerfilData, PerfilData1 } from '../../interfaces/app.dataSistemas.interface';
import { RestService } from "../../service/rest.service"
import { BehaviorSubject } from 'rxjs'
import { AddperfComponent } from '../perfiles/addperf/addperf.component'
import { EditperfComponent } from '../perfiles/editperf/editperf.component';
import { DelperfComponent } from '../perfiles/delperf/delperf.component'
import { filter } from 'rxjs/internal/operators/filter';
import {SistemasData} from '../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {

 // Seting Angular Material
 displayedColumns: string[] = ['id', 'nombreper','nombresis', 'urlsis', 'opciones'];
 public dataSource = new MatTableDataSource<PerfilData>();
 public data: any;

 //declaracion de dialogos
 FormAdd: MatDialogRef<AddperfComponent>

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 mostrarMensajeFiltro: boolean;
 dataCentros: PerfilData[];
 index: number;
 id: number;

 constructor(private api: RestService, public dialog: MatDialog) {

 }

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

 // Paginador de Tabla Perfiles
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


 // Carga de Listado de Perfiles
 cargarCentros() {
   console.log("cargarCentros()");
   this.api.getProfiles().subscribe((data: any) => {
     //data acumula todo dato que el servicio tenga
     this.data = data;
     //iniciamos dataSource
     this.setData();
   }, error => {
     console.log(error);
   });
 }

 // Agrega un Perfil
 addPerfil() {

   this.FormAdd = this.dialog.open(AddperfComponent, {
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

    //  this.data.push(target);
    //  this.setData();
     
   });
   


 }

 // Editar un Centro
 editarCentro(centro: PerfilData1) {
   const dialogRef = this.dialog.open(EditperfComponent, {
     width: '350px',
     data: {
       data: centro
     }
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog Perfil UPD closed');
     console.log(result);
     //this.pageRefresh();
   });
 }

 // Borrar un Centro de Gestión
 // deleteCentros(index: number, id: number, descripcion: string, duenoObra: string, rut: string) {
   deleteCentros(index: number, perId: number, perNombre: string, sisUrlSistema: string) {
   this.index = index;
   this.id = perId;
   const dialogRef = this.dialog.open(DelperfComponent, {
     width: '500px',
     data: {
       index: index,
       id: perId,
       descripcion: perNombre,
      
     }
     

   });

   dialogRef.afterClosed().subscribe(result => {
    
    this.pageRefresh();
   });
 }
 pageRefresh(){
  location.reload();
}

}
