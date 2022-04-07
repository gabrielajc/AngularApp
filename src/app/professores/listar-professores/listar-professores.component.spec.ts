import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfessoresService } from '../professores.service';
import { ListarProfessoresComponent } from './listar-professores.component';

describe('ListarProfessoresComponent', () => {
  let component: ListarProfessoresComponent;
  let fixture: ComponentFixture<ListarProfessoresComponent>;

  beforeEach(() => {
    const professoresServiceStub = () => ({
      deletar: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      getAll: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListarProfessoresComponent],
      providers: [
        { provide: ProfessoresService, useFactory: professoresServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ListarProfessoresComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'retornarTodos').and.callThrough();
      component.ngOnInit();
      expect(component.retornarTodos).toHaveBeenCalled();
    });
  });

  describe('retornarTodos', () => {
    it('makes expected calls', () => {
      const professoresServiceStub: ProfessoresService = fixture.debugElement.injector.get(
        ProfessoresService
      );
      spyOn(professoresServiceStub, 'getAll').and.callThrough();
      component.retornarTodos();
      expect(professoresServiceStub.getAll).toHaveBeenCalled();
    });
  });
});
