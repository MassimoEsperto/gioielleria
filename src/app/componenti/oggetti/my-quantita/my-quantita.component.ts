import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'my-quantita',
  templateUrl: './my-quantita.component.html',
  styleUrls: ['./my-quantita.component.scss']
})
export class MyQuantitaComponent implements OnInit {

  @Input() prodotto: Prodotto | undefined;

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit(): void {
  }

  delProdotto(idp: number) {
    this.carrelloService.delProdotto(idp)
  }

  addProdotto(prd: any) {
    this.carrelloService.setProdotto(prd)
  }
}
