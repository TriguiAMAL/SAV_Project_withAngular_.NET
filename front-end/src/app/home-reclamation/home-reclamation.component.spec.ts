import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReclamationComponent } from './home-reclamation.component';

describe('HomeReclamationComponent', () => {
  let component: HomeReclamationComponent;
  let fixture: ComponentFixture<HomeReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeReclamationComponent]
    });
    fixture = TestBed.createComponent(HomeReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
