import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchallengesComponent } from './allchallenges.component';

describe('AllchallengesComponent', () => {
  let component: AllchallengesComponent;
  let fixture: ComponentFixture<AllchallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllchallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});   
