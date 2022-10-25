import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicallistComponent } from './medicallist.component';

describe('MedicallistComponent', () => {
  let component: MedicallistComponent;
  let fixture: ComponentFixture<MedicallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicallistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
