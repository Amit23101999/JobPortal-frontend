import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeuserloginComponent } from './welcomeuserlogin.component';

describe('WelcomeuserloginComponent', () => {
  let component: WelcomeuserloginComponent;
  let fixture: ComponentFixture<WelcomeuserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeuserloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeuserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
