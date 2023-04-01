import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'carde',
  templateUrl: './carde.component.html',
  styleUrls: ['./carde.component.scss']
})
export class CardeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
