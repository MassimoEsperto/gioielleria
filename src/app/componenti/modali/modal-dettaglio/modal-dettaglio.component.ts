import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-dettaglio',
  templateUrl: './modal-dettaglio.component.html',
  styleUrls: ['./modal-dettaglio.component.scss']
})
export class ModalDettaglioComponent implements OnInit {

  @Input() dettaglio!: any;
  copertina:string="";
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.copertina=this.dettaglio.img
  }

  ngOnDestroy() {

    document.body.removeAttribute("style");

  }

 
}
