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
    return JSON.parse(this.getData(this.carrello)) || []
  }


  setProdotto(prd: Prodotto) {
    //recupera la lista
    let know_how = JSON.parse(this.getData(this.carrello)) || []
    //verifica se il prodotto gia sia selezionato
    let exists = know_how.find((i: { id: number }) => i.id == prd.id);
    if (exists) {
      exists.quantita += 1; //aggiunge un unita
    } else {
      know_how.push(prd) //aggiunge il nuovo prodotto
    }

    //calcola il numero di prodotti selezionati
    this.quantita.next(this.sommaProdotti(know_how));
    this.selezionati.next(know_how);


    this.saveData(this.carrello, JSON.stringify(know_how))
  }

  delProdotto(id: number) {
    let before_how = JSON.parse(this.getData(this.carrello)) || []

    //verifica se il prodotto gia sia selezionato
    let exists = before_how.find((i: { quantita: number; id: number }) => i.id == id && i.quantita > 1);

    let know_how: any

    if (exists) {
      exists.quantita += -1; //diminuisce un unita
      know_how = before_how
    } else {
      know_how = before_how.filter((i: { id: number }) => i.id != id); //slice
    }

    this.quantita.next(this.sommaProdotti(know_how));
    this.selezionati.next(know_how);

    this.saveData(this.carrello, JSON.stringify(know_how))
  }

  get qntProdotti() {
    let know_how = JSON.parse(this.getData(this.carrello)) || []
    return this.sommaProdotti(know_how)
  }

  getProdotti() {
    return JSON.parse(this.getData(this.carrello)) || []
  }

  clearCarrello() {
    this.quantita.next(0);
    this.selezionati.next([]);
    this.removeData(this.carrello)
  }



  private sommaProdotti(elements: any) {

    let somma = 0
    for (let item of elements) {
      somma += item.quantita
    }
    return somma
  }

  private saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private getData(key: string) {
    return localStorage.getItem(key) || "[]"
  }
  private removeData(key: string) {
    localStorage.removeItem(key);
  }

  private clearData() {
    localStorage.clear();
  }


}
