import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'my-footer-nav',
  templateUrl: './my-footer-nav.component.html',
  styleUrls: ['./my-footer-nav.component.scss']
})
export class MyFooterNavComponent implements OnInit {

  qntcarrello:number = 1;
  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {

    this.carrelloService.quantita.subscribe((val:any) => {
      this.qntcarrello = val
   })
  }

  isCollapse:boolean=false
}
