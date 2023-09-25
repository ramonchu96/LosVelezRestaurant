import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosVendidosComponent } from './platos-vendidos.component';

describe('PlatosVendidosComponent', () => {
  let component: PlatosVendidosComponent;
  let fixture: ComponentFixture<PlatosVendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatosVendidosComponent]
    });
    fixture = TestBed.createComponent(PlatosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
