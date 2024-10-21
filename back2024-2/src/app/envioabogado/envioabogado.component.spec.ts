import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioabogadoComponent } from './envioabogado.component';

describe('EnvioabogadoComponent', () => {
  let component: EnvioabogadoComponent;
  let fixture: ComponentFixture<EnvioabogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioabogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioabogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
