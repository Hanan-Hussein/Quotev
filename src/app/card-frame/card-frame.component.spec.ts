import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrameComponent } from './card-frame.component';

describe('CardFrameComponent', () => {
  let component: CardFrameComponent;
  let fixture: ComponentFixture<CardFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
