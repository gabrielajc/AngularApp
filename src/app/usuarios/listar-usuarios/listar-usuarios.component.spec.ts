import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuariosService } from './../usuarios.service';
import { ListarUsuariosComponent } from './listar-usuarios.component';

describe('ListarUsuariosComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;

  beforeEach(() => {
    const usuariosServiceStub = () => ({
      getAll: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      deletar: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListarUsuariosComponent],
      providers: [{ provide: UsuariosService, useFactory: usuariosServiceStub }]
    });
    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`seEhMaiorQue18 has default value`, () => {
    expect(component.seEhMaiorQue18).toEqual(false);
  });

  it(`id has default value`, () => {
    expect(component.id).toEqual(0);
  });

  it(`usuarios has default value`, () => {
    expect(component.usuarios).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const usuariosServiceStub: UsuariosService = fixture.debugElement.injector.get(
        UsuariosService
      );
      spyOn(component, 'retornarTodos').and.callThrough();
      spyOn(usuariosServiceStub, 'getAll').and.callThrough();
      component.ngOnInit();
      expect(component.retornarTodos).toHaveBeenCalled();
      expect(usuariosServiceStub.getAll).toHaveBeenCalled();
    });
  });

  describe('retornarTodos', () => {
    it('makes expected calls', () => {
      const usuariosServiceStub: UsuariosService = fixture.debugElement.injector.get(
        UsuariosService
      );
      spyOn(usuariosServiceStub, 'getAll').and.callThrough();
      component.retornarTodos();
      expect(usuariosServiceStub.getAll).toHaveBeenCalled();
    });
  });
});
