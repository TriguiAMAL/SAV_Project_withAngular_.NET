import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/models/reclamation';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'http://localhost:5187/api/Reclamations/client'; 
  private apiUrlpost = 'http://localhost:5187/api/Reclamations';

  constructor(private http: HttpClient) { }

  getReclamationsByClient(clientId: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/${clientId}`);
  }

  createReclamation(reclamation: any): Observable<any> {
    return this.http.post(`${this.apiUrlpost}`, reclamation);
  }

  getAllReclamations():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrlpost);
  }
  

  deleteReclamation(id: number): Observable<void> {
    const url = `${this.apiUrlpost}/${id}`; // URL complète avec l'identifiant
    return this.http.delete<void>(url); // Requête HTTP DELETE
  }

  updateReclamation(id: number, updatedReclamation: Reclamation): Observable<Reclamation> {
    const url = `${this.apiUrlpost}/${id}`; // URL complète avec l'identifiant
    return this.http.put<Reclamation>(url, updatedReclamation); // Requête HTTP PUT
  }
  
  
} 