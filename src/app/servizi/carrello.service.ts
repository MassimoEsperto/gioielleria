import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotto } from '../classi/model/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  carrello: string = "CRL83PAY-LS";
  quantita = new BehaviorSubject(this.qntProdotti);
  selezionati = new BehaviorSubject(this.getSelezionati);

  constructor() { }

  get getSelezionati() {
    return JSON.parse(this.getData(this.carrello))||[]
  }


  setProdotto(prd: Prodotto) {
    let know_how = JSON.parse(this.getData(this.carrello))||[]
    know_how.push(prd)
    this.quantita.next(know_how.length);
    this.selezionati.next(know_how);
    console.log("setProdotto: ",know_how)
    this.saveData(this.carrello, JSON.stringify(know_how))
  }

  get qntProdotti() {
    let know_how = JSON.parse(this.getData(this.carrello))||[]
    console.log("know_how.lenght",know_how.length)
    return know_how.length
  }

  getProdotti() {
    return JSON.parse(this.getData(this.carrello))||[]
  }



  private saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private getData(key: string) {
    return localStorage.getItem(key)||"[]"
  }
  private removeData(key: string) {
    localStorage.removeItem(key);
  }

  private clearData() {
    localStorage.clear();
  }


}
