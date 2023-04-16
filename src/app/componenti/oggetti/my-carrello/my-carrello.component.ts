import { Component, Input, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'my-carrello',
  templateUrl: './my-carrello.component.html',
  styleUrls: ['./my-carrello.component.scss']
})
export class MyCarrelloComponent implements OnInit {

  @Input() posizione: number = 0;
  qntcarrello: number = 1;
  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {

    this.carrelloService.quantita.subscribe((val: any) => {
      this.qntcarrello = val
      console.log("carrello: ",val)
    })
  }

}
