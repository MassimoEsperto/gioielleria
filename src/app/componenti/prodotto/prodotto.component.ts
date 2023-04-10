import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto: Prodotto | undefined;
  @Output() submit = new EventEmitter();
  
  constructor(private carrelloService: CarrelloService) { }

  ngOnInit(): void {
  }

  vediDettaglio(){
    this.submit.emit(this.prodotto)
  }

  addProduct(prd:any){
this.carrelloService.setProdotto(prd)
  }

}
