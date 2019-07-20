import { Component, OnInit } from '@angular/core';
import { Animal } from 'app/interfaces/app.dataSistemas.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  pass = '';
  hide = true;
  // sistema: Animal = {
  //   name: "",
  //   sound: ""
  // }
  // animalControl = new FormControl('', [Validators.required]);
  // animals: Animal[] = [
  //   { name: 'Dog', sound: 'Woof!' },
  //   { name: 'Cat', sound: 'Meow!' },
  //   { name: 'Cow', sound: 'Moo!' },
  //   { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  // ];

  constructor() { }
  ngOnInit() {
  }

  // data() {
  //   this.animals.push(this.sistema);
  //   console.log(this.animals);
  // }


}