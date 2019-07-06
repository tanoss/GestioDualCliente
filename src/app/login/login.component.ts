import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../router.animations';
import {ServiceService} from '../layout/matriculacion/service.service';
import swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../layout/matriculacion/modelos/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  user: User;
  correoValido: boolean;
  validateLogin: boolean;

  constructor(private spinner: NgxSpinnerService, private service: ServiceService, private translate: TranslateService,
              public router: Router
  ) {
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
    this.translate.use('es');
  }

  ngOnInit() {
    this.validateLogin = true;
    this.correoValido = false;
  }

  onLoggedin(event) {
    if (event.which === 13 || event === 13) {
      this.validateLogin = false;
      this.spinner.show();
      const clientId = 1;
      const clientSecret = 'gCKtEi6W8KpXgWCv4sDSlkM6IErcQQLTuvW5j5yg';
      const grantType = 'password';

      this.userName = this.userName.toLocaleLowerCase();
      if (this.userName.search('@') === -1) {
        this.userName = this.userName + '@yavirac.edu.ec';
      }
      this.service.postPublic('oauth/token', {
        'client_id': clientId,
        'client_secret': clientSecret,
        'grant_type': grantType,
        'username': this.userName,
        'password': this.password
      }).subscribe(
        response => {
          localStorage.setItem('token', JSON.stringify(response['access_token']));
          localStorage.setItem('isLoggedin', 'true');
          this.service.get('users?email=' + this.userName).subscribe(response2 => {
            localStorage.setItem('user', JSON.stringify(response2['user']));
            if (response2['user']['role']['rol'] === '1') {
              this.router.navigate(['dashboard-cupo']);
            }
            if (response2['user']['role']['rol'] === '2') {
              this.router.navigate(['perfil-estudiante']);
            }
            if (response2['user']['role']['rol'] === '3') {
              this.router.navigate(['dashboard-matricula']);
            }
            if (response2['user']['role']['rol'] === '4') {
              this.router.navigate(['dashboard-matricula']);
            }
          });
          this.validateLogin = false;
          this.spinner.hide();
        },
        error => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('isLoggedin');
          swal.fire('Credenciales Incorrectas', 'Nombre de Usuario y/o Contraseña incorrectos', 'warning');
          this.validateLogin = true;
          this.spinner.hide();
        });
    }
  }

  forgotPassword() {
    if (this.userName != null && this.userName !== '') {
      if (this.userName.search('@') === -1) {
        this.userName = this.userName + '@yavirac.edu.ec';
      }
      if (this.validateCorreoElectronico(this.userName)) {
        this.spinner.show();
        this.service.postPublic('password/email', {'email': this.userName}).subscribe(
          response => {
            console.log(response);
            this.spinner.hide();
            swal.fire('¡Correo Electrónico Enviado!', 'Ingrese a su correo electrónico institucional', 'success');
          },
          error => {
            console.log(error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedin');
            this.spinner.hide();
            swal.fire('¡Correo Electrónico Enviado!', 'Ingrese a su correo electrónico institucional', 'info');
          });
      }
    } else {
      swal.fire('¡Correo Electrónico Institucional Incorrecto!', 'Ingrese un correo válido', 'error');
    }
  }

  validateCorreoElectronico(correoElectronico: string) {
    const expreg = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    if (expreg.test(correoElectronico)) {
      this.correoValido = true;
      return true;
    } else {
      this.correoValido = false;
      return false;
    }
  }
}
