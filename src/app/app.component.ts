import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  template: ` <!--<my-header></my-header>-->
 <my-header></my-header>
  <router-outlet></router-outlet>
  <my-footer-nav></my-footer-nav>
  <modal-carrello></modal-carrello>`

})

export class AppComponent {
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
