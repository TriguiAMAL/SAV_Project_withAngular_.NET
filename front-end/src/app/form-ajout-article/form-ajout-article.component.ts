import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importation correcte du Router
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-form-ajout-article',
  templateUrl: './form-ajout-article.component.html',
  styleUrls: ['./form-ajout-article.component.css']
})
export class FormAjoutArticleComponent implements OnInit {

  addArticleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private As:ArticleService,private toastr: ToastrService) { // Injection du Router
    // Initialisation du formulaire avec un groupe vide
    this.addArticleForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      garantieDuration: ['', [Validators.required, Validators.min(1)]],
      clientId: ['', [Validators.required]],
      dateAdded: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Vous n'avez plus besoin de redéfinir ici
  }

  onSubmit(): void {
    if (this.addArticleForm.valid) {
      console.log('Form Submitted!', this.addArticleForm.value);
      this.As.createArticle(this.addArticleForm.value).subscribe(()=>{
        this.toastr.success('Article added successfully.');
        this.router.navigate(['/article-vendu']);

      })
     
    } else {
      console.log('Form Invalid');
    }
  }
}
