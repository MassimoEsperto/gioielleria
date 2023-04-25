import { Component, Input, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/servizi/carrello.service';

@Component({
  selector: 'modal-dettaglio',
  templateUrl: './modal-dettaglio.component.html',
  styleUrls: ['./modal-dettaglio.component.scss']
})
export class ModalDettaglioComponent implements OnInit {

  @Input() dettaglio!: any;
  copertina: string = "";

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.copertina = this.dettaglio.img
  }

  ngOnDestroy() {

    document.body.removeAttribute("style");

  }

  setProdotto() {
    this.carrelloService.setProdotto(this.dettaglio)
  }


}
