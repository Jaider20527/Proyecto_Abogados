import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviocasosComponent } from './enviocasos.component';

describe('EnviocasosComponent', () => {
  let component: EnviocasosComponent;
  let fixture: ComponentFixture<EnviocasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviocasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviocasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
