import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  template: `<my-header></my-header>
  <router-outlet></router-outlet>
  <my-footer></my-footer>`

})

export class AppComponent {
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
