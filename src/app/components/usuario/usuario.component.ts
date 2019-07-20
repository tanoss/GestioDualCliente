import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/app.dataSistemas.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user: Usuario = {
    nombre: "Luis Tito",
    apellido: "Espin Morales",
    cedula: "1713243316",
    telefono: "0282524",
    id: "0986388699",
    perfil: "Tutor Empresarial",
    pidm: "Utics",
    email: "ltem@espe.edu.ec",
    departamento:"Universidad de las Fuerza Armadas - ESPE"

  }
  constructor() { }

  ngOnInit() {
  }

}