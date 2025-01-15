import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReclamationService } from './../../services/reclamation.service';

@Component({
  selector: 'app-form-reclamation',
  templateUrl: './form-reclamation.component.html',
  styleUrls: ['./form-reclamation.component.css']
})
export class FormReclamationComponent implements OnInit {
  reclamation: any = {
    sujet: '',
    description: '',
    dateReclamation: new Date().toISOString().split('T')[0], // Date actuelle formatée
    articleId: '',
    clientId: '',
    statut: 'En cours', // Statut par défaut
  };

  constructor(
    private reclamationService: ReclamationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupération du clientId depuis l'URL
    this.route.params.subscribe(params => {
      this.reclamation.clientId = params['clientId'] || '';
    });
  }

  submitReclamation(): void {
    this.reclamationService.createReclamation(this.reclamation).subscribe(
      () => {
        console.log('Réclamation créée avec succès');
        // Navigation avec clientId
        this.router.navigate([`/home-reclamation/${this.reclamation.clientId}`]);
      },
      (error) => {
        console.error('Erreur lors de la création de la réclamation', error);
      }
    );
  }
}

