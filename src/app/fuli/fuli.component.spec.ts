import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuliComponent } from './fuli.component';

describe('FuliComponent', () => {
  let component: FuliComponent;
  let fixture: ComponentFixture<FuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
