import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.scss']
})
export class MyFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAdmin: boolean = false
}
