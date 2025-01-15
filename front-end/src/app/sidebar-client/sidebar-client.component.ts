import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent {
  @Input() clientId!: string;  // Reçoit le clientId en tant qu'input

  constructor(private router: Router) {}

  // Fonction pour naviguer vers les pages avec le clientId
  goToArticleClient(clientId: string): void {
    this.router.navigate([`/article-client/${clientId}`]);
    
  }

  goToHomeReclamation(clientId: string): void {
    this.router.navigate([`/home-reclamation/${clientId}`]);
  }
}
