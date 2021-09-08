import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomHistoryComponent } from './symptom-history.component';

describe('SymptomHistoryComponent', () => {
  let component: SymptomHistoryComponent;
  let fixture: ComponentFixture<SymptomHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
