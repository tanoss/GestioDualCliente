import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {ServiceService} from '../matriculacion/service.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../matriculacion/modelos/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  total_matriculados_count: Array<any>;
  user: User;

  constructor(private spinner: NgxSpinnerService, private service: ServiceService) {


  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) as User;
  }


}
