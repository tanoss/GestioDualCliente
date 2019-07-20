import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    //{ path: '/sistemas', title: 'sistemas',  icon:'pages', class: 'nav-pills-info' },   
    // { path: '/perfiles', title: 'perfil',  icon:'bubble_chart', class: '' },
    //{ path: '/opciones', title: 'opcion',  icon:'view_list', class: '' },
    { path: '/informe-aprendizaje-estudiante', title: 'Inf. Aprend. Est',  icon:'view_list', class: '' },
    { path: '/informe-aprendizaje-tutor', title: 'Inf. Aprend. Tutor',  icon:'view_list', class: '' },
    { path: '/plan-marco-formacion', title: 'P. Marco Formacion',  icon:'view_list', class: '' },
    { path: '/plan-rotacion', title: 'Plan Rotación',  icon:'view_list', class: '' },
    { path: '/proyecto-empresarial', title: 'Proyecto Empresarial',  icon:'view_list', class: '' },
    //{ path: '/seguimiento-estudiante', title: 'Seguimiento Estudiante',  icon:'view_list', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
 
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
