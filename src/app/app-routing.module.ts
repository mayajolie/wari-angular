import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path:"login", component: LoginComponent},
  { path:"partenaire", component: PartenairesComponent},
  { path:"utilisateur", component: UtilisateurComponent},
  { path:"depot", component: DepotComponent},
  { path:"transaction", component: TransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
