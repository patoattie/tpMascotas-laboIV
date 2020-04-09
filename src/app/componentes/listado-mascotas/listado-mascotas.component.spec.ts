import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMascotasComponent } from './listado-mascotas.component';

describe('ListadoMascotasComponent', () => {
  let component: ListadoMascotasComponent;
  let fixture: ComponentFixture<ListadoMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
