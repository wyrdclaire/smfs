import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindfallComponent } from './windfall.component';

describe('WindfallComponent', () => {
  let component: WindfallComponent;
  let fixture: ComponentFixture<WindfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
