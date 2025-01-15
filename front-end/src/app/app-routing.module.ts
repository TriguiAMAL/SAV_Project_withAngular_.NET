import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReclamationComponent } from './home-reclamation/home-reclamation.component';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';

const routes: Routes = [
  { path: 'home-reclamation/:clientId', component: HomeReclamationComponent },
  { path: 'form-reclamation/:clientId', component: FormReclamationComponent },  
  { path: '**', redirectTo: '/home-reclamation/:clientId' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
