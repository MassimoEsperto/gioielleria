import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'modal-carrello',
  templateUrl: './modal-carrello.component.html',
  styleUrls: ['./modal-carrello.component.scss']
})
export class ModalCarrelloComponent implements OnInit {

  selezionati:Prodotto[]=[]
  constructor(private carrelloService: CarrelloService) { }

  ngOnInit(){
    this.carrelloService.selezionati.subscribe((val: any) => {
      this.selezionati= val
    })
  }

  delProdotto(idp:number){
    this.carrelloService.delProdotto(idp)
  }

  clearCarrello(){
    this.carrelloService.clearCarrello()
  }

  acquista(){
    console.log("selezionati:",this.selezionati)
  }
 
  ngOnDestroy() {

    document.body.removeAttribute("style");
  }


}
