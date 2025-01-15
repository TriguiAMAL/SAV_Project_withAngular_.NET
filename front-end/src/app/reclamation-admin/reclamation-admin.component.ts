import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reclamation } from 'src/models/reclamation';
import { ReclamationService } from 'src/services/reclamation.service';

@Component({
  selector: 'app-reclamation-admin',
  templateUrl: './reclamation-admin.component.html',
  styleUrls: ['./reclamation-admin.component.css']
})
export class ReclamationAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'clientId', 'description', 'dateReclamation','status', 'actions','Inervention'];
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService, private router:Router) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe({
      next: (data: Reclamation[]) => {
        this.reclamations = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des réclamations :', error);
      }
    });
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réclamation ?')) {
      this.reclamationService.deleteReclamation(id).subscribe({
        next: () => {
          this.reclamations = this.reclamations.filter(r => r.id !== id);
          alert('Réclamation supprimée avec succès.');
        },
        error: (error) => {
          console.error('Erreur lors de la suppression :', error);
        }
      });
    }
  }

  onUpdate(reclamation: Reclamation): void {
    const updatedReclamation = { ...reclamation };
    updatedReclamation.description = prompt('Nouvelle description:', reclamation.description) || reclamation.description;
  
    this.reclamationService.updateReclamation(reclamation.id, updatedReclamation).subscribe({
      next: (updated: Reclamation) => {
        const index = this.reclamations.findIndex(r => r.id === updated.id);
        if (index !== -1) {
          this.reclamations[index] = updated; // Mettre à jour la liste locale
         
        }
        alert('Réclamation mise à jour avec succès.');
        this.loadReclamations();
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour :', error);
      }
    });
  }


  passerAIntervention(reclamation: Reclamation): void {
    
    reclamation.statut = 'En intervention';
  
    
    this.reclamationService.updateReclamation(reclamation.id, reclamation).subscribe({
      next: (updatedReclamation) => {
        
        const index = this.reclamations.findIndex(r => r.id === updatedReclamation.id);
        if (index !== -1) {
          this.reclamations[index] = updatedReclamation;
        }
        this.router.navigate(['/intervention']);
        alert('Statut mis à jour vers "En intervention".');
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour du statut :', error);
      }
    });
  }
  

  
  
}
