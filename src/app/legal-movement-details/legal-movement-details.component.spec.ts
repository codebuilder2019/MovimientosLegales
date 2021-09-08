import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMovementDetailsComponent } from './legal-movement-details.component';

describe('LegalMovementDetailsComponent', () => {
  let component: LegalMovementDetailsComponent;
  let fixture: ComponentFixture<LegalMovementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalMovementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalMovementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
