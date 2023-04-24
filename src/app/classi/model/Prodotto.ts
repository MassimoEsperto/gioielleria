export class Prodotto {
    id: number;
    categoria: number;
    descrizione: string;
    img: string; //copertina
    anticipazione: string;
    titolo: string;
    vetrina: string;
    prezzo: string;
    saldo: string;
    quantita: number = 1;
    flag: boolean = true;
    imgs: Array<string> = [];
    sintesi:string;

    constructor(
        id: number,
        categoria: number,
        titolo: string,
        descrizione: string,
        img: string,
        vetrina: string,
        prezzo: string,
        saldo: string,
        imgs: Array<string>,
        sintesi:string
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
        this.imgs = imgs;
        this.sintesi = sintesi;
    }
}