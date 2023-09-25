import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasNovedadesComponent } from './ofertas-novedades.component';

describe('OfertasNovedadesComponent', () => {
  let component: OfertasNovedadesComponent;
  let fixture: ComponentFixture<OfertasNovedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertasNovedadesComponent]
    });
    fixture = TestBed.createComponent(OfertasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
