import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusformComponent } from './statusform.component';

describe('StatusformComponent', () => {
  let component: StatusformComponent;
  let fixture: ComponentFixture<StatusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
