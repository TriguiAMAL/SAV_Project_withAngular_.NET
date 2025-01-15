import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from './../../services/reclamation.service';
import { Reclamation } from 'src/models/reclamation';

@Component({
  selector: 'app-home-reclamation',
  templateUrl: './home-reclamation.component.html',
  styleUrls: ['./home-reclamation.component.css']
})
export class HomeReclamationComponent implements OnInit {
  reclamations: Reclamation[] = [];
  clientId: string = '';

  constructor(
    private reclamationService: ReclamationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  navigateToFormReclamation(): void {
    this.router.navigate([`/form-reclamation/${this.clientId}`]);
  }

  ngOnInit(): void {
    // Récupération du clientId depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.clientId = params.get('clientId') || '';
      if (this.clientId) {
        this.loadReclamations();
      } else {
        console.error('Client ID not found in the URL');
      }
    });
  }

  private loadReclamations(): void {
    this.reclamationService.getReclamationsByClient(this.clientId).subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Error fetching reclamations', error);
      }
    );
  }
}
