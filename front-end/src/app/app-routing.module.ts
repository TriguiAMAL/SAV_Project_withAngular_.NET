import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReclamationComponent } from './home-reclamation/home-reclamation.component';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ArticleVenduComponent } from './article-vendu/article-vendu.component';
import { FormAjoutArticleComponent } from './form-ajout-article/form-ajout-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamationAdminComponent } from './reclamation-admin/reclamation-admin.component';
import { InterventionComponent } from './intervention/intervention.component';

const routes: Routes = [
  {
    path:'login',
    
    component:LoginComponent
  },

  {
    path:'registration',
    
    component:RegistrationComponent
  },


  {
    path:'home',
    
    component:HomeComponent
  },

  {
    path:'article-vendu',
    
    component:ArticleVenduComponent
  },

  {
    path:'formulaireAjoutArticle',
    
    component:FormAjoutArticleComponent
  },

  {
    path:'reclamationAdmin',
    
    component:ReclamationAdminComponent
  },

  {
    path:'intervention',
    
    component:InterventionComponent
  },
  {
    path:'dashboard',
    
    component:DashboardComponent
  },

  { path: 'home-reclamation/:clientId', component: HomeReclamationComponent },
  { path: 'form-reclamation/:clientId', component: FormReclamationComponent },  
  { path: '**', redirectTo: '/home-reclamation/:clientId' },

  {
    path:'**',
    
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
