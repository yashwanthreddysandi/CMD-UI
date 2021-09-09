import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDetailFormComponent } from './prescription-detail-form.component';

describe('PrescriptionDetailFormComponent', () => {
  let component: PrescriptionDetailFormComponent;
  let fixture: ComponentFixture<PrescriptionDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
