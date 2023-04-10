import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'modal-carrello',
  templateUrl: './modal-carrello.component.html',
  styleUrls: ['./modal-carrello.component.scss']
})
export class ModalCarrelloComponent implements OnInit {

  constructor(private carrelloService: CarrelloService) { }

  @Input() crlq:any = []
  ngOnInit(){
    this.prodottiCarrello()
  }

  ngOnChanges() {
    this.prodottiCarrello()
  }

  



  ngOnDestroy() {

    document.body.removeAttribute("style");
  }

  prodottiCarrello(){
    let pdr = this.carrelloService.getProdotti()
    console.log("prodottiCarrello",pdr)
  }
}
