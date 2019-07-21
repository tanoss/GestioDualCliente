import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { SistemasData, OpcionData1, EntidadData } from "app/interfaces/app.dataSistemas.interface";
import { OpcionData } from "app/interfaces/app.dataSistemas.interface";
import { PerfilData1 } from "app/interfaces/app.dataSistemas.interface";
import { PerfilData } from "app/interfaces/app.dataSistemas.interface"
//const endpoint = "http://localhost:3000/adm";
// const endpoint = "http://192.168.137.45:8080/adm/";
//const endpoint = "http://localhost:8083/adm/";
const endpoint = "http://127.0.0.1:8000/api/";

const http = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: "root"
})
export class RestService {


  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  // --------------------------Inicio Funciones Http---------------------------

  // Funcion unica de consulta----------------------------------------
  getData(seg: String): Observable<any> {
    return this.http.get<any>(endpoint + seg).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  
  // Funcion unica para guargar---------------------------------------
  addData(sistema, add: String) {
    let sistemaAdd = JSON.stringify(sistema);
    return this.http.post(endpoint  + add, sistemaAdd, http).pipe(
      map((res: any) => {
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }
  // Funcion unica para actualizar-----------------------------------
  updateData(sistema, upd: String) {
    let sistemaUpdate = JSON.stringify(sistema);
    return this.http.put(endpoint + upd, sistemaUpdate , http).pipe(
      map((res: any) => {
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }
  // Funcion unica para actualizar-----------------------------------
  deleteData(id: number, upd: String) {
    return this.http.delete(endpoint + upd + "/" + id, http).pipe(
      map((res: any) => {
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }

  findData(id: number, upd: String) {
    return this.http.get(endpoint + upd + "/" + id, http).pipe(
      map((res: any) => {
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }
  // --------------------------Fin Funciones Http ---------------------------


  // OBTENER TODOS los Centro de Gestión

  getentidades(): Observable<any> {
    return this.http.get<any>(endpoint + "entidadformadora",http).pipe(
      map((data: any) => {
        // console.log(data.centroGestion);
        return data;
      })
    );
  }

  getppempresarial(): Observable<any> {
    return this.http.get<any>(endpoint + "business_project_plans",http).pipe(
      map((data: any) => {
        // console.log(data.centroGestion);
        return data;
      })
    );
  }

 


  getSystems(): Observable<SistemasData> {
    return this.http.get<SistemasData>(endpoint + "systems",).pipe(
      map((data: any) => {
        // console.log(data.centroGestion);
        return data;
      })
    );
  }
  //listar los sistemas

  listSystem() {
    return this.http.get(endpoint + "systems").pipe(map(this.extractData));
  }

  // AGREGAR sistema
  AddSystems(sistema: any) {
    let sistemaString = JSON.stringify(sistema);
    return this.http.post(endpoint + "business_project_plans", sistemaString, http).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }
  // Actualizar UN Sistema
  upadatesistema(sistema: SistemasData) {
    let sistemaString = JSON.stringify(sistema);

    let body = JSON.stringify(sistema);

    console.log("La data que envío al Servicio es:", sistema);

    return this.http.put(endpoint + "updsys", body, http).pipe(
      map((res: any) => {
        console.log("La data que se actualiza es: ", res);

        // Parsear String a Entero
        for (let i = 0; i < res.length; i++) {
          if (res.id) {
            parseInt('sistema.id');
            console.log(res.id);
          }
        }

        return res.data;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }

  // Borrar un Sistema
  deleteSystems(id: number) {
    let url = `http://localhost:8083/adm/delsys/${id}`;
    return this.http.delete(url);
  }



  // OBTENER TODOS los perfiles
  getProfiles(): Observable<SistemasData> {
    return this.http.get<SistemasData>(endpoint + "SegProfiles").pipe(
      map((data: any) => {
        // console.log(data.centroGestion);
        return data;
      })
    );
  }



  AddProfiles(perfil: PerfilData1) {
    let sistemaString = JSON.stringify(perfil);
    return this.http.post(endpoint + "addpero", sistemaString, http).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }

  upadateperfil(perfil: PerfilData1) {
    let sistemaString = JSON.stringify(perfil);

    let body = JSON.stringify(perfil);

    console.log("La data que envío al Servicio es:", perfil);

    return this.http.put(endpoint + "updper", body, http).pipe(
      map((res: any) => {
        console.log("La data que se actualiza es: ", res);

        // Parsear String a Entero
        for (let i = 0; i < res.length; i++) {
          if (res.id) {
            parseInt('sistema.id');
            console.log(res.id);
          }
        }

        return res.data;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }


  deleteProfil(id: number) {
    let url = `http://localhost:8083/adm/delper/${id}`;
    return this.http.delete(url);
  }


  // OBTENER TODOS los Centro de Gestión
  getOpcion(): Observable<OpcionData> {
    return this.http.get<OpcionData>(endpoint + 'segppccion').pipe(
      map((data: OpcionData) => {
        // console.log(data.centroGestion);
        return data;
      })
    );
  }

  // AGREGAR Centro de Gestión
  AddOpc(opcion: OpcionData) {
    let opcionString = JSON.stringify(opcion);
    console.log(opcion)
    return this.http.post(endpoint + "addopt", opcionString, http).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }
  // Actualizar UN Centro de Gestión
  actualizarOpcion(opcion: OpcionData1) {
    let opcionString = JSON.stringify(opcion);

    let body = JSON.stringify(opcion);

    console.log("La data que envío al Servicio es:", opcion);

    return this.http.put(endpoint + "updopc", body, http).pipe(
      map((res: any) => {
        console.log("La data que se actualiza es: ", res);

        // Parsear String a Entero


        for (let i = 0; i < res.length; i++) {
          if (res.idOpcionGestion) {
            parseInt('opcion.idOpcionGestion');
            console.log(res.idOpcionGestion);
          }
        }

        return res.data;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }

  // Borrar un Centro de Gestión
  deleteOpcion(id: number) {
    let url = `http://localhost:8083/adm/delopc/${id}`;
    return this.http.delete(url);
  }

  successpass() {
    let url = `http://localhost:8080/adm/passusu/dfssdf`;
    return this.http.get(url);
  }
}
