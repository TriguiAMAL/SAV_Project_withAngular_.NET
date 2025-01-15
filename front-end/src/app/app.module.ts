import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceRechangeDetailsComponent } from './piece-rechange-details/piece-rechange-details.component';
import { FormPieceRechangeDetailsComponent } from './form-piece-rechange-details/form-piece-rechange-details.component';
import { HomeReclamationComponent } from './home-reclamation/home-reclamation.component';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    PieceRechangeDetailsComponent,
    FormPieceRechangeDetailsComponent,
    HomeReclamationComponent,
    FormReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000, // Durée d'affichage des notifications
      positionClass: 'toast-top-center', // Position des notifications
      preventDuplicates: true, // Empêche les notifications dupliquées

    }), // ToastrModule added
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
