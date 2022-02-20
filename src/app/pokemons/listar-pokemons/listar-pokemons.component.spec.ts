import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokemonsComponent } from './listar-pokemons.component';

describe('ListarPokemonsComponent', () => {
  let component: ListarPokemonsComponent;
  let fixture: ComponentFixture<ListarPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
