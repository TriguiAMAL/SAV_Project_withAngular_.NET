import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/Client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-gerer-clients',
  templateUrl: './gerer-clients.component.html',
  styleUrls: ['./gerer-clients.component.css']
})
export class GererClientsComponent implements OnInit {
  displayedColumns: string[] = [ 'fullName','email','actions'];
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getUsers().subscribe((response)=>{
    this.clients= response;})

     
  }


  onUpdate(client: Client): void {
    console.log('Update client:', client);
    this.clientService.updateUser
    
}

onDelete(client: Client): void {
  console.log('Delete client:', client);
 
}

}
