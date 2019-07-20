import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'app/service/rest.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.scss']
})
export class ConfiguracionesComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checkpass: FormGroup;
  hide = true;
  disabled = false;
  public data: any

  constructor(private _formBuilder: FormBuilder, private api: RestService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      lastpass: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      newpass: ['', Validators.required]
    });
    this.checkpass = this._formBuilder.group({
      check: ['', Validators.requiredTrue]
    });
  }

  confpass() {
    this.api.successpass().subscribe((data: any) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
      console.log("cargarCentros... " + this.data);
      if (data == true) {
        
      } else {
        alert("recibio un false");
      }
      //iniciamos dataSource
    }, error => {
      console.log(error);
    });
  }

}
