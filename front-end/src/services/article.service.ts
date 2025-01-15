import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://localhost:7081/api/Article';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }


  updateArticle(id: number, article: Article): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, article);
  }

  // Supprimer un article
  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createArticle(article: Article): Observable<any> {
    return this.http.post(this.apiUrl, article);  // Envoi de l'article via POST
  }
  getArticlesByClientId(clientId: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/client/${clientId}`);
  }
  
}
