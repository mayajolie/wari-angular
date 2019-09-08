import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NavComponent } from './nav/nav.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule } from '@angular/router';
import { ListePartComponent } from './liste-part/liste-part.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListransComponent } from './listrans/listrans.component';
import Swal from 'sweetalert2'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartenairesComponent,
    UtilisateurComponent,
    NavComponent,
    DepotComponent,
    TransactionComponent,
    ListePartComponent,
    ListUserComponent,
    ListransComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }