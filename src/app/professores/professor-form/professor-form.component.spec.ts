import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';
import { ProfessorFormComponent } from './professor-form.component';

describe('ProfessorFormComponent', () => {
  let component: ProfessorFormComponent;
  let fixture: ComponentFixture<ProfessorFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: (object: any) => ({}) });
    const activatedRouteStub = () => ({ params: { subscribe: (f: (arg0: {}) => any) => f({}) } });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const professoresServiceStub = () => ({
      getOne: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      update: (id: any, value: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      salvar: (value: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProfessorFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: ProfessoresService, useFactory: professoresServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProfessorFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`id has default value`, () => {
    expect(component.id).toEqual(0);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      const professoresServiceStub: ProfessoresService = fixture.debugElement.injector.get(
        ProfessoresService
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      spyOn(professoresServiceStub, 'getOne').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
      expect(professoresServiceStub.getOne).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const professoresServiceStub: ProfessoresService = fixture.debugElement.injector.get(
        ProfessoresService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(professoresServiceStub, 'update').and.callThrough();
      spyOn(professoresServiceStub, 'salvar').and.callThrough();
      component.onSubmit();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(professoresServiceStub.update).toHaveBeenCalled();
      expect(professoresServiceStub.salvar).toHaveBeenCalled();
    });
  });
});
