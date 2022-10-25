import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourcelistComponent } from './humanresourcelist.component';

describe('HumanresourcelistComponent', () => {
  let component: HumanresourcelistComponent;
  let fixture: ComponentFixture<HumanresourcelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanresourcelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanresourcelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
