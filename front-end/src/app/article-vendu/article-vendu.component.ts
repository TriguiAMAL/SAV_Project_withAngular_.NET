import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-vendu',
  templateUrl: './article-vendu.component.html',
  styleUrls: ['./article-vendu.component.css']
})
export class ArticleVenduComponent implements OnInit {
  displayedColumns: string[] = ['articleId', 'name', 'description', 'garantieDuration', 'dateAdded', 'actions'];
  articles: Article[] = [];

  
  isCreateArticleFormVisible = false; // Afficher ou non le formulaire
    constructor(private artService: ArticleService,private toastr: ToastrService) {}
  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.artService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  deleteArticle(id: number): void {
    this.artService.deleteArticle(id).subscribe({
      next: () => {
        this.toastr.success('Article deleted successfully.');
        this.loadArticles();  // Recharger la liste après suppression
      },
      error: (error) => {
        if (error.status === 409) {
          // Conflit : L'article est lié à une réclamation
          this.toastr.error(error.error.message || 'Cannot delete the article because it is linked to a reclamation.');
        } else {
          // Autres erreurs
          this.toastr.error('An error occurred while deleting the article.');
        }
      },
    });
  }

  updateArticle(id: number): void {
    console.log("Update Article ID:", id);
    // Ici vous pouvez ouvrir un formulaire ou une modal pour l'édition de l'article
  }

}
