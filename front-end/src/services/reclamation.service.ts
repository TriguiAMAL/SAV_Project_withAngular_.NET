import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/models/reclamation';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'https://localhost:7081/api/Reclamations/client'; 
  private apiUrlpost = 'https://localhost:7081/api/Reclamations';

  constructor(private http: HttpClient) { }

  getReclamationsByClient(clientId: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/${clientId}`);
  }

  createReclamation(reclamation: any): Observable<any> {
    return this.http.post(`${this.apiUrlpost}`, reclamation);
  }
  
} 