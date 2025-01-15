import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './../../services/article.service';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-article-client',
  templateUrl: './article-client.component.html',
  styleUrls: ['./article-client.component.css']
})
export class ArticleClientComponent implements OnInit {
  articles: Article[] = [];
  clientId: string = '';
  displayedColumns: string[] = ['articleId', 'name', 'description', 'garantieDuration', 'dateAdded', 'action'];

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer le clientId depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.clientId = params.get('clientId') || '';
      if (this.clientId) {
        this.loadArticles();
      } else {
        console.error('Client ID not found in the URL');
      }
    });
  }

  private loadArticles(): void {
    this.articleService.getArticlesByClientId(this.clientId).subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error('Error fetching articles', error);
      }
    );
  }

  navigateToFormReclamation(articleId: number): void {
    this.router.navigate([`/form-reclamation/${this.clientId}`], {
      queryParams: { articleId: articleId }
    });
  }
}
