import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ArticleVenduComponent } from './article-vendu/article-vendu.component'; // Important pour Toastr
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormAjoutArticleComponent } from './form-ajout-article/form-ajout-article.component';
import { PieceRechangeDetailsComponent } from './piece-rechange-details/piece-rechange-details.component';
import { FormPieceRechangeDetailsComponent } from './form-piece-rechange-details/form-piece-rechange-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ArticleVenduComponent,
    FormAjoutArticleComponent,
    PieceRechangeDetailsComponent,
    FormPieceRechangeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule, // Ajoutez ce module
    ToastrModule.forRoot({ // Configuration de Toastr
      timeOut: 3000, // Durée d'affichage des notifications
      positionClass: 'toast-top-center', // Position des notifications
      preventDuplicates: true, // Empêche les notifications dupliquées
    }),
   
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
