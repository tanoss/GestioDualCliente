
import { Component, OnInit,  ViewChild, AfterViewInit  } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { SistemasData, EntidadData, InAprendizajeModel } from '../../interfaces/app.dataSistemas.interface';
import { RestService } from "../../service/rest.service"
import { BehaviorSubject } from 'rxjs'
import { AddinfTutorComponent } from '../informe-aprendizaje-tutor/addinf-tutor/addinf-tutor.component'
import { EditinfTutorComponent } from '../informe-aprendizaje-tutor/editinf-tutor/editinf-tutor.component';
import { DelinfTutorComponent } from '../informe-aprendizaje-tutor/delinf-tutor/delinf-tutor.component';
import { filter } from 'rxjs/internal/operators/filter';
@Component({
  selector: 'app-informe-aprendizaje-tutor',
  templateUrl: './informe-aprendizaje-tutor.component.html',
  styleUrls: ['./informe-aprendizaje-tutor.component.scss']
})
export class InformeAprendizajeTutorComponent implements OnInit {
  objeto: any;
  displayedColumns: string [] = ['id','semena','calificacion','fechaEntrega','reflexion','observaciones'];
  public dataSource = new MatTableDataSource<InAprendizajeModel>();
  public data: any;
  FormAdd: MatDialogRef<AddinfTutorComponent>
  @ViewChild(MatDialog) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros: InAprendizajeModel[];
  index: number;
  id: number;

  constructor(private api: RestService, public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.cargarCentros();
  }
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
  cargarCentros() {
    this.api.getData('business_project_plans').subscribe((data: any) => {
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

    this.FormAdd = this.dialog.open(AddinfTutorComponent, {
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
    const dialogRef = this.dialog.open(EditinfTutorComponent, {
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
  deleteCentros(index: number, id: number, semana: number, calificacion:number, fechaEntrega:Date,reflexion:string,observaciones:string) {
    this.index = index;
    this.id = id;

    const dialogRef = this.dialog.open(DelinfTutorComponent, {
      width: '500px',
      data: {
        index: index,
        id: id,
        semana: semana,
        calificacion: calificacion,
        fechaEntrega: fechaEntrega,
        reflexion: reflexion,
        observaciones: observaciones,
        
      }


    });



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
