import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormulariosService } from '../formularios.service';
import { MeuFormComponent } from './meu-form.component';

describe('MeuFormComponent', () => {
  let component: MeuFormComponent;
  let fixture: ComponentFixture<MeuFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const formulariosServiceStub = () => ({
      salvar: value => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MeuFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: FormulariosService, useFactory: formulariosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(MeuFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const formulariosServiceStub: FormulariosService = fixture.debugElement.injector.get(
        FormulariosService
      );
      spyOn(formulariosServiceStub, 'salvar').and.callThrough();
      component.onSubmit();
      expect(formulariosServiceStub.salvar).toHaveBeenCalled();
    });
  });
});
