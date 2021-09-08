import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMovementsListComponent } from './legal-movements-list.component';

describe('LegalMovementsListComponent', () => {
  let component: LegalMovementsListComponent;
  let fixture: ComponentFixture<LegalMovementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalMovementsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalMovementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
