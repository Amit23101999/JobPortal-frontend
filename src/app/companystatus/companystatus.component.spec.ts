import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanystatusComponent } from './companystatus.component';

describe('CompanystatusComponent', () => {
  let component: CompanystatusComponent;
  let fixture: ComponentFixture<CompanystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanystatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
