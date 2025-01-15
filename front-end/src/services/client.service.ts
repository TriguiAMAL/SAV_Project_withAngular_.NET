import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Ensure this is set properly
import { Client } from 'src/models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = "http://localhost:5187/api"; // Base URL for your API

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/users`);
  }

  // Update user
  updateUser(clientId: string, user: Client): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${clientId}`, user);
  }

  // Delete user
  deleteUser(clientId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${clientId}`);
  }
}
