import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/es/) ? browserLang : 'en');
  }

  ngOnInit() {
  }
}
