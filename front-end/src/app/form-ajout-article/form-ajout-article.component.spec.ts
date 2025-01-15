import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutArticleComponent } from './form-ajout-article.component';

describe('FormAjoutArticleComponent', () => {
  let component: FormAjoutArticleComponent;
  let fixture: ComponentFixture<FormAjoutArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjoutArticleComponent]
    });
    fixture = TestBed.createComponent(FormAjoutArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
