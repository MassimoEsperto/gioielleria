import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Prodotto } from 'src/app/classi/model/Prodotto';
import { ClienteService } from 'src/app/servizi/cliente.service';

@Component({
  selector: 'prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  prodotti: Array<Prodotto> = []
  dettaglio: Prodotto | undefined;
  loading: boolean = true;
  hidden_page: boolean = false;
  search: string = "";



  setDettaglio(dettaglio: Prodotto) {
    this.dettaglio = dettaglio
  }

  getProdotti() {

    this.clienteService.getProdotti()
      .pipe(finalize(() => {
        //this.spinner.clear()
      }))
      .subscribe({
        next: (result: any) => {

          this.prodotti = result

        },
        error: (error: any) => {
          //this.alert.error(error);
        }
      })
  }

  getProdottiMock(search: string) {

    console.log("getProdottiMock", search)

    this.prodotti = []
    this.loading = true

    setTimeout(() => {

      this.hidden_page = true

      this.loading = false
      this.prodotti = this.clienteService.getProdottiMock("")
      setTimeout(() => {
        this.hidden_page = false

      }, 100);
    }, 3000);

  }



  ngOnInit() {

    this.dettaglio = new Prodotto(1, 1, "", "", "", "", "", "",[],"",[])

    this.route.params
      .subscribe((params: Params) =>
        this.getProdottiMock(params['search'])
      );

  }


  getPromoStyles(qnt: number) {

    return 'visibility: hidden;animation-delay: 0.' + qnt + 's;';
  }



}
