import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardeComponent } from './testt/carde/carde.component';
import { ShowcaseComponent } from './testt/showcase/showcase.component';
import { MyHeaderComponent } from './componenti/sezioni/my-header/my-header.component';
import { MyFooterComponent } from './componenti/sezioni/my-footer/my-footer.component';
import { MyBackToTopComponent } from './componenti/oggetti/my-back-to-top/my-back-to-top.component';
import { HomeComponent } from './pagine/home/home.component';
import { ProdottiComponent } from './pagine/prodotti/prodotti.component';
import { CaroselloComponent } from './componenti/carosello/carosello.component';
import { PresentazioneComponent } from './componenti/presentazione/presentazione.component';
import { CaratteristicaComponent } from './componenti/caratteristica/caratteristica.component';
import { VenditeComponent } from './componenti/vendite/vendite.component';
import { InteressiComponent } from './componenti/interessi/interessi.component';
import { MyMenuLateraleComponent } from './componenti/sezioni/my-menu-laterale/my-menu-laterale.component';
import { FormsModule } from '@angular/forms';
import { ProdottoComponent } from './componenti/prodotto/prodotto.component';
import { ModalDettaglioComponent } from './componenti/modali/modal-dettaglio/modal-dettaglio.component';
import { ModalCarrelloComponent } from './componenti/modali/modal-carrello/modal-carrello.component';
import { MyFooterNavComponent } from './componenti/sezioni/my-footer-nav/my-footer-nav.component';
import { ClienteService } from './servizi/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CarrelloService } from './servizi/carrello.service';
import { MyCarrelloComponent } from './componenti/oggetti/my-carrello/my-carrello.component';
import { MyUserComponent } from './componenti/oggetti/my-user/my-user.component';
import { UtenteComponent } from './pagine/utente/utente.component';
import { MyQuantitaComponent } from './componenti/oggetti/my-quantita/my-quantita.component';
import { MyToastSuccessComponent } from './componenti/oggetti/my-toast-success/my-toast-success.component';

@NgModule({
  declarations: [
    AppComponent,
    CardeComponent,
    ShowcaseComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyBackToTopComponent,
    HomeComponent,
    ProdottiComponent,
    CaroselloComponent,
    PresentazioneComponent,
    CaratteristicaComponent,
    VenditeComponent,
    InteressiComponent,
    MyMenuLateraleComponent,
    ProdottoComponent,
    ModalDettaglioComponent,
    ModalCarrelloComponent,
    MyFooterNavComponent,
    MyCarrelloComponent,
    MyUserComponent,
    UtenteComponent,
    MyQuantitaComponent,
    MyToastSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    ClienteService,
    CarrelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
