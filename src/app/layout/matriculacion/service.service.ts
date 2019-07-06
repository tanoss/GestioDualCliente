import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers: HttpHeaders;


  constructor(private _http: HttpClient) {
  }

  get(url: string) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token').replace('"', ''));
    return this._http.get(environment.API_URL + url, {headers: this.headers});
  }

  post(url: string, data: any) {
    url = environment.API_URL + url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token').replace('"', ''));
    return this._http.post(url, data, {headers: this.headers});
  }

  update(url: string, data: any) {
    url = environment.API_URL + url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token').replace('"', ''));
    return this._http.put(url, data, {headers: this.headers});
  }

  delete(url: string) {
    url = environment.API_URL + url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token').replace('"', ''));
    return this._http.delete(url, {headers: this.headers});
  }

  upload(url: string, data: any) {
    url = environment.API_URL + url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token').replace('"', ''));
    return this._http.post(url, data, {headers: this.headers});
  }

  postPublic(url: string, data: any) {
    url = environment.API_URL_PUBLIC + url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, data, {headers: this.headers});
  }
}
