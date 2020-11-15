import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizzendComponent } from './wizzend.component';

describe('WizzendComponent', () => {
  let component: WizzendComponent;
  let fixture: ComponentFixture<WizzendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizzendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizzendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
