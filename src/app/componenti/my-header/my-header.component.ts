import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {

  posizione: number = 0
  lastScroll: number = 0

  @HostListener("window:scroll", []) onWindowScroll() {

    let scroll = window.pageYOffset;


    if (scroll > 45 && scroll < 800) {

      this.posizione = window.innerWidth > 992 ? 1 : 2

    } else if (scroll > 45 && scroll < this.lastScroll) {

      this.posizione = window.innerWidth > 992 ? 1 : 2

    } else if (scroll > 45 && scroll > this.lastScroll) {

      this.posizione = 3

    } else {

      this.posizione = 0

    }

    this.lastScroll = scroll;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
