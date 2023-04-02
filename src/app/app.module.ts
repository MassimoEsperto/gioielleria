import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardeComponent } from './testt/carde/carde.component';
import { ShowcaseComponent } from './testt/showcase/showcase.component';
import { MyHeaderComponent } from './componenti/my-header/my-header.component';
import { MyFooterComponent } from './componenti/my-footer/my-footer.component';
import { MyBackToTopComponent } from './componenti/my-back-to-top/my-back-to-top.component';
import { HomeComponent } from './pagine/home/home.component';
import { ProdottiComponent } from './pagine/prodotti/prodotti.component';
import { CaroselloComponent } from './componenti/carosello/carosello.component';
import { PresentazioneComponent } from './componenti/presentazione/presentazione.component';
import { CaratteristicaComponent } from './componenti/caratteristica/caratteristica.component';
import { VenditeComponent } from './componenti/vendite/vendite.component';
import { InteressiComponent } from './componenti/interessi/interessi.component';
import { MyNavSearchComponent } from './componenti/my-nav-search/my-nav-search.component';
import { MyHeaderSearchComponent } from './componenti/my-header-search/my-header-search.component';
import { MyMenuLateraleComponent } from './componenti/my-menu-laterale/my-menu-laterale.component';

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
    MyNavSearchComponent,
    MyHeaderSearchComponent,
    MyMenuLateraleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
