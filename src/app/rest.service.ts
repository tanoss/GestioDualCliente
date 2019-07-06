import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const http = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json'
  })
}
const endpoint = "http://localhost:8083/adm/";

@Injectable({
  providedIn: 'root'
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
    return this.http.get<any>('/adm/' + seg).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  //Funcion unica de busqueda por id
  findData(id: number, upd: String) {
    return this.http.get(endpoint + upd + "/" + id, http).pipe(
      map((res: any) => {
        return res;
      }, error => {
        console.log("Error: ", error);
      })
    );
  }

  // Funcion unica para guargar---------------------------------------
  addData(sistema, add: String) {
    let sistemaAdd = JSON.stringify(sistema);
    return this.http.post("/adm/" + add, sistemaAdd, http).pipe(
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
    return this.http.put(endpoint + upd, sistemaUpdate, http).pipe(
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

 
  // --------------------------Fin Funciones Http ---------------------------


}
