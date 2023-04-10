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

  ngOnInit(){
    this.carrelloService.selezionati.subscribe((val: any) => {
      console.log("selezionati:",val)
    })
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
