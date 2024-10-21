import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioclientComponent } from './envioclient.component';

describe('EnvioclientComponent', () => {
  let component: EnvioclientComponent;
  let fixture: ComponentFixture<EnvioclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
