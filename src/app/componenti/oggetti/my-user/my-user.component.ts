import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.scss']
})
export class MyUserComponent implements OnInit {

  @Input() posizione: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
