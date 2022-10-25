import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitstatusComponent } from './submitstatus.component';

describe('SubmitstatusComponent', () => {
  let component: SubmitstatusComponent;
  let fixture: ComponentFixture<SubmitstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
