import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaReglasComponent } from './sistema-reglas.component';

describe('SistemaReglasComponent', () => {
  let component: SistemaReglasComponent;
  let fixture: ComponentFixture<SistemaReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaReglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
