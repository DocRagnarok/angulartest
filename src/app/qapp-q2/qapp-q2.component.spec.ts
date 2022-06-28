import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QappQ2Component } from './qapp-q2.component';

describe('QappQ2Component', () => {
  let component: QappQ2Component;
  let fixture: ComponentFixture<QappQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QappQ2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(QappQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
