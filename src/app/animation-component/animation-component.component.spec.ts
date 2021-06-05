import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationComponentComponent } from './animation-component.component';

describe('AnimationComponentComponent', () => {
  let component: AnimationComponentComponent;
  let fixture: ComponentFixture<AnimationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
