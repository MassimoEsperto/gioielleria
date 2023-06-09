import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardeComponent } from './testt/carde/carde.component';
import { HomeComponent } from './pagine/home/home.component';
import { ShowcaseComponent } from './testt/showcase/showcase.component';
import { ProdottiComponent } from './pagine/prodotti/prodotti.component';
import { UtenteComponent } from './pagine/utente/utente.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'carde', component: CardeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:search', component: ProdottiComponent },
  { path: 'product', component: ProdottiComponent },
  { path: 'utente', component: UtenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

