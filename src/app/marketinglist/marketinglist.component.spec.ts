import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketinglistComponent } from './marketinglist.component';

describe('MarketinglistComponent', () => {
  let component: MarketinglistComponent;
  let fixture: ComponentFixture<MarketinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketinglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
