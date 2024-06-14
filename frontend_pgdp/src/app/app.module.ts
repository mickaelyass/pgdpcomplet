import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierpersonnelComponent } from './dossierpersonnel/dossierpersonnel.component';
import { CongesComponent } from './conges/conges.component';
import { SalairesComponent } from './salaires/salaires.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import {FormsModule} from "@angular/forms";
import { ProfileListComponent } from './profile-list/profile-list.component';
import { AddnewprofileComponent } from './addnewprofile/addnewprofile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    DossierpersonnelComponent,
    CongesComponent,
    SalairesComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    ProfileListComponent,
    AddnewprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
