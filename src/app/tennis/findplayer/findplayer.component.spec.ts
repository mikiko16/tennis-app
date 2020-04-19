import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindplayerComponent } from './findplayer.component';

describe('FindplayerComponent', () => {
  let component: FindplayerComponent;
  let fixture: ComponentFixture<FindplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
