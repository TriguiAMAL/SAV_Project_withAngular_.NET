import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ArticleVenduComponent } from './article-vendu/article-vendu.component';
import { FormAjoutArticleComponent } from './form-ajout-article/form-ajout-article.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
