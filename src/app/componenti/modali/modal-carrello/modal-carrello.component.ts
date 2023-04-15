import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'modal-carrello',
  templateUrl: './modal-carrello.component.html',
  styleUrls: ['./modal-carrello.component.scss']
})
export class ModalCarrelloComponent implements OnInit {

  selezionati: Prodotto[] = []
  quantita: number = 0

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.carrelloService.selezionati.subscribe((val: any) => {
      this.selezionati = val
    })
    this.carrelloService.quantita.subscribe((val: any) => {
      this.quantita = val
    })
  }


  clearCarrello() {
    this.carrelloService.clearCarrello()
  }

  acquista() {
    console.log("selezionati:", this.selezionati)
  }

  ngOnDestroy() {

    document.body.removeAttribute("style");
  }

  getTotale() {
    let soldi: number = 0;
    for (let soldo of this.selezionati) {
      if(soldo.flag){
        soldi += Number(soldo.prezzo) * soldo.quantita
      }
      
    }
    return soldi
  }
}
