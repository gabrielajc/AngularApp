import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DetalheUsuarioComponent } from './detalhe-usuario.component';

describe('DetalheUsuarioComponent', () => {
  let component: DetalheUsuarioComponent;
  let fixture: ComponentFixture<DetalheUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetalheUsuarioComponent]
    });
    fixture = TestBed.createComponent(DetalheUsuarioComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onPlusClick', () => {
    it('makes expected calls', () => {
      spyOn(component, 'notificarSeMaiorQue18').and.callThrough();
      component.onPlusClick();
      expect(component.notificarSeMaiorQue18).toHaveBeenCalled();
    });
  });

  describe('onLessClick', () => {
    it('makes expected calls', () => {
      spyOn(component, 'notificarSeMaiorQue18').and.callThrough();
      component.onLessClick();
      expect(component.notificarSeMaiorQue18).toHaveBeenCalled();
    });
  });
});
