import { ReclamationService } from './../../services/reclamation.service';
import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/models/reclamation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-reclamation',
  templateUrl: './home-reclamation.component.html',
  styleUrls: ['./home-reclamation.component.css']
})
export class HomeReclamationComponent implements OnInit {
  reclamations: Reclamation[] = [];
  clientId: string = '6d018909-8453-4bcc-9101-769f6ba686b1'; // Set the actual client ID

  constructor(private ReclamationService: ReclamationService, private router: Router) { }

navigateToFormReclamation(): void {
  this.router.navigate([`/form-reclamation/${this.clientId}`]);
}

  ngOnInit(): void {
    this.ReclamationService.getReclamationsByClient(this.clientId).subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Error fetching reclamations', error);
      }
    );
  }
}
