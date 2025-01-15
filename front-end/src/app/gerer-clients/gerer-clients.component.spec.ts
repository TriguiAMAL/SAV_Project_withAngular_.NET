import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererClientsComponent } from './gerer-clients.component';

describe('GererClientsComponent', () => {
  let component: GererClientsComponent;
  let fixture: ComponentFixture<GererClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererClientsComponent]
    });
    fixture = TestBed.createComponent(GererClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
