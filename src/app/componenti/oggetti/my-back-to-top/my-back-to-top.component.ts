import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-back-to-top',
  templateUrl: './my-back-to-top.component.html',
  styleUrls: ['./my-back-to-top.component.scss']
})
export class MyBackToTopComponent implements OnInit {

  
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