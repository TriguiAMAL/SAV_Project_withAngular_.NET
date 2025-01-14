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

@NgModule({
  declarations: [
    AppComponent,
    PieceRechangeDetailsComponent,
    FormPieceRechangeDetailsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
