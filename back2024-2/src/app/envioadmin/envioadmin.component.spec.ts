import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioadminComponent } from './envioadmin.component';

describe('EnvioadminComponent', () => {
  let component: EnvioadminComponent;
  let fixture: ComponentFixture<EnvioadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
