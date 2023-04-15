export class Prodotto {
    id: number;
    categoria: number;
    descrizione: string;
    img: string;
    anticipazione: string;
    titolo: string;
    vetrina: string;
    prezzo: string;
    saldo: string;
    quantita: number = 1;

    constructor(
        id: number,
        categoria: number,
        titolo: string,
        descrizione: string,
        img: string,
        vetrina: string,
        prezzo: string,
        saldo: string
    ) {
        this.id = id;
        this.categoria = categoria;
        this.descrizione = descrizione;
        this.img = img;
        this.anticipazione = descrizione.length > 54 ? descrizione.substring(0, 60) + "...." : descrizione;
        this.titolo = titolo;
        this.vetrina = vetrina;
        this.prezzo = prezzo;
        this.saldo = saldo;
    }
}