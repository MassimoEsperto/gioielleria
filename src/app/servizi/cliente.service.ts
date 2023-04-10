import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Prodotto } from '../classi/model/Prodotto';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  apiUrl: string = 'enter-your-api-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // Create
  createTask(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }
  // Read
  showTasks() {
    return this.http.get(`${this.apiUrl}`);
  }
  // Update
  updateTask(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.error));
  }
  // Delete
  deleteTask(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }

  getProdotti(): Observable<any> {
    return this.http.get(`${this.apiUrl}`).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.error));
  }

  getProdottiMock(ricerca: any) {
    let prodotti: Array<Prodotto> = []

    prodotti.push(
      new Prodotto(
        1, 1, "RollsTimi",
        "Pagani Design 2022 Orologio meccanico Orologio automatico di lusso da uomo Resistente all'acqua 100 Lancette NH35A Acciaio inossidabile rivestito Vetro zaffiro Orologio meccanico da 40 mm 1733"
        , "product-1.png",
        "New",
        "19.00", "29.00"
      )
    )



    prodotti.push(
      new Prodotto(
        2, 1, "Cornetto",
        "Cornetto della fortuna Pireta, Ciondolo portafortuna in vetro di Murano, Cordino con nodo regolabile, ipoallergenico, Fatto a mano, Festa della mamma, Made in Italy, Regalo portafortuna."
        , "product-2.jpg",
        "Il piu venduto",
        "39.00", "69.00"
      )
    )

    prodotti.push(
      new Prodotto(
        3, 1, "Anello brutto",
        "Anello artigianale,in alluminio anodizzato,pezzo unico!Modello Nodo Lunare Argento Opaco."
        , "product-3.jpg",
        "Il piu venduto",
        "39.00", "69.00"
      )
    )

    prodotti.push(
      new Prodotto(
        4, 1, "Collana Elegante",
        "Collana Elegance con Semi di Soffione - Esprimi un desiderio. Soffione Gioielli  Dente di leone Tarassaco. Artigianale. Realizzato a mano. Maglie fini acciaio inox anallergico."
        , "product-4.jpg",
        "New",
        "69.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        5, 5, "Dente di leone",
        "Dente di leone Esprimi un desiderio Vero Fiori Pendente Catena in Argento Sterling 925 Collane."
        , "product-5.jpg",
        "New",
        "69.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        6, 5, "Cono",
        "CONO Medio di legno 5 x 10 cm PER SPIRALI di Energia - Erim Ighina."
        , "product-6.jpg",
        "New",
        "19.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        7, 5, "Cavigliera",
        "Made by Nami Cavigliera Surfer Uomo e Donna - Cavigliera Sottile Boho Hippie Etnico - Accessori Fatti a Mano per Festa in Spiaggia - Impermeabile e Regolabile (turchese & multi profondo) (Set di 2)."
        , "product-7.jpg",
        "New",
        "9.00", ""
      )
    )


    prodotti.push(
      new Prodotto(
        8, 5, "Orecchini",
        "Orecchini Cuore Sacro - Orecchini donna - Orecchini pendenti - Orecchini votivi - Orecchini color oro (Perno piccolo (pallina))."
        , "product-8.jpg",
        "New",
        "39.00", "69.00"
      )
    )





    prodotti.push(
      new Prodotto(
        1, 1, "RollsTimi2",
        "Pagani Design 2022 Orologio meccanico Orologio automatico di lusso da uomo Resistente all'acqua 100 Lancette NH35A Acciaio inossidabile rivestito Vetro zaffiro Orologio meccanico da 40 mm 1733"
        , "product-1.png",
        "New",
        "19.00", "29.00"
      )
    )



    prodotti.push(
      new Prodotto(
        1, 1, "Cornetto2",
        "Cornetto della fortuna Pireta, Ciondolo portafortuna in vetro di Murano, Cordino con nodo regolabile, ipoallergenico, Fatto a mano, Festa della mamma, Made in Italy, Regalo portafortuna."
        , "product-2.jpg",
        "Il piu venduto",
        "39.00", "69.00"
      )
    )

    prodotti.push(
      new Prodotto(
        1, 1, "Anello brutto2",
        "Anello artigianale,in alluminio anodizzato,pezzo unico!Modello Nodo Lunare Argento Opaco."
        , "product-3.jpg",
        "Il piu venduto",
        "39.00", "69.00"
      )
    )

    prodotti.push(
      new Prodotto(
        1, 1, "Collana Elegante2",
        "Collana Elegance con Semi di Soffione - Esprimi un desiderio. Soffione Gioielli  Dente di leone Tarassaco. Artigianale. Realizzato a mano. Maglie fini acciaio inox anallergico."
        , "product-4.jpg",
        "New",
        "69.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        1, 5, "Dente di leone2",
        "Dente di leone Esprimi un desiderio Vero Fiori Pendente Catena in Argento Sterling 925 Collane."
        , "product-5.jpg",
        "New",
        "69.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        1, 5, "Cono2",
        "CONO Medio di legno 5 x 10 cm PER SPIRALI di Energia - Erim Ighina."
        , "product-6.jpg",
        "New",
        "19.00", ""
      )
    )

    prodotti.push(
      new Prodotto(
        1, 5, "Cavigliera2",
        "Made by Nami Cavigliera Surfer Uomo e Donna - Cavigliera Sottile Boho Hippie Etnico - Accessori Fatti a Mano per Festa in Spiaggia - Impermeabile e Regolabile (turchese & multi profondo) (Set di 2)."
        , "product-7.jpg",
        "New",
        "9.00", ""
      )
    )


    prodotti.push(
      new Prodotto(
        1, 5, "Orecchini2",
        "Orecchini Cuore Sacro - Orecchini donna - Orecchini pendenti - Orecchini votivi - Orecchini color oro (Perno piccolo (pallina))."
        , "product-8.jpg",
        "New",
        "39.00", "69.00"
      )
    )

    return prodotti;
  }



  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
