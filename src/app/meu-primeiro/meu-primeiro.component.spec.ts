import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuPrimeiroComponent } from './meu-primeiro.component';

describe('MeuPrimeiroComponent', () => {
  let component: MeuPrimeiroComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MeuPrimeiroComponent]
    });
    fixture = TestBed.createComponent(MeuPrimeiroComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`curso de angular`);
  });

  it(`nome has default value`, () => {
    expect(component.nome).toEqual(`Gabriela`);
  });

  it(`cor has default value`, () => {
    expect(component.cor).toEqual(`vermelho`);
  });

  describe('botaoClick', () => {
    it('makes expected calls', () => {
      spyOn(component, 'testaCPF').and.callThrough();
      component.botaoClick();
      expect(component.testaCPF).toHaveBeenCalled();
    });
  });

  describe('onCpfBlur', () => {
    it('makes expected calls', () => {
      spyOn(component, 'testaCPF').and.callThrough();
      component.onCpfBlur();
      expect(component.testaCPF).toHaveBeenCalled();
    });
  });
});
