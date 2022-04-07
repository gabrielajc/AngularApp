import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { FormsModule } from '@angular/forms';
import { ListarPokemonsComponent } from './listar-pokemons.component';

describe('ListarPokemonsComponent', () => {
  let component: ListarPokemonsComponent;
  let fixture: ComponentFixture<ListarPokemonsComponent>;

  beforeEach(() => {
    const pokemonsServiceStub = () => ({
      getAll: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      getPaginado: (offset: number, limit: number) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListarPokemonsComponent],
      providers: [{ provide: PokemonsService, useFactory: pokemonsServiceStub }]
    });
    fixture = TestBed.createComponent(ListarPokemonsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`offset has default value`, () => {
    expect(component.offset).toEqual(0);
  });

  it(`limit has default value`, () => {
    expect(component.limit).toEqual(10);
  });

  it(`opcoes has default value`, () => {
    expect(component.opcoes).toEqual([10, 20, 30, 40, 50, 1000]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const pokemonsServiceStub: PokemonsService = fixture.debugElement.injector.get(
        PokemonsService
      );
      spyOn(pokemonsServiceStub, 'getAll').and.callThrough();
      component.ngOnInit();
      expect(pokemonsServiceStub.getAll).toHaveBeenCalled();
    });
  });

  describe('anterior', () => {
    it('makes expected calls', () => {
      const pokemonsServiceStub: PokemonsService = fixture.debugElement.injector.get(
        PokemonsService
      );
      spyOn(pokemonsServiceStub, 'getPaginado').and.callThrough();
      component.anterior();
      expect(pokemonsServiceStub.getPaginado).toHaveBeenCalled();
    });
  });

  describe('proximo', () => {
    it('makes expected calls', () => {
      const pokemonsServiceStub: PokemonsService = fixture.debugElement.injector.get(
        PokemonsService
      );
      spyOn(pokemonsServiceStub, 'getPaginado').and.callThrough();
      component.proximo();
      expect(pokemonsServiceStub.getPaginado).toHaveBeenCalled();
    });
  });

  describe('onSelectChange', () => {
    it('makes expected calls', () => {
      const pokemonsServiceStub: PokemonsService = fixture.debugElement.injector.get(
        PokemonsService
      );
      spyOn(pokemonsServiceStub, 'getPaginado').and.callThrough();
      component.onSelectChange();
      expect(pokemonsServiceStub.getPaginado).toHaveBeenCalled();
    });
  });
});
