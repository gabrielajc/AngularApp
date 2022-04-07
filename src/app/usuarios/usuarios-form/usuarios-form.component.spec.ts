import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CepService } from 'src/app/shared/services/cep.service';
import { UsuariosService } from '../usuarios.service';
import { UsuariosFormComponent } from './usuarios-form.component';

describe('UsuariosFormComponent', () => {
  let component: UsuariosFormComponent;
  let fixture: ComponentFixture<UsuariosFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: (object: any) => ({}) });
    const activatedRouteStub = () => ({ params: { subscribe: (f: (arg0: {}) => any) => f({}) } });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const cepServiceStub = () => ({
      consultar: (cep: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    const usuariosServiceStub = () => ({
      getOne: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      update: (id: any, value: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      salvar: (value: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UsuariosFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: CepService, useFactory: cepServiceStub },
        { provide: UsuariosService, useFactory: usuariosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(UsuariosFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`id has default value`, () => {
    expect(component.id).toEqual(0);
  });

  describe('buscarCEP', () => {
    it('makes expected calls', () => {
      const cepServiceStub: CepService = fixture.debugElement.injector.get(
        CepService
      );
      spyOn(cepServiceStub, 'consultar').and.callThrough();
      component.buscarCEP();
      expect(cepServiceStub.consultar).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      const usuariosServiceStub: UsuariosService = fixture.debugElement.injector.get(
        UsuariosService
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      spyOn(usuariosServiceStub, 'getOne').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
      expect(usuariosServiceStub.getOne).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const usuariosServiceStub: UsuariosService = fixture.debugElement.injector.get(
        UsuariosService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(usuariosServiceStub, 'update').and.callThrough();
      spyOn(usuariosServiceStub, 'salvar').and.callThrough();
      component.onSubmit();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(usuariosServiceStub.update).toHaveBeenCalled();
      expect(usuariosServiceStub.salvar).toHaveBeenCalled();
    });
  });
});
