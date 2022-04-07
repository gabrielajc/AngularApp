import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { GrifaTextoDirective } from './grifa-texto.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div grifaTexto>Default</div>
  `
})
class TestComponent {}

describe('GrifaTextoDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    const elementRefStub = () => ({
      nativeElement: { style: { backgroundColor: {}, color: {} } }
    });
    TestBed.configureTestingModule({
      declarations: [GrifaTextoDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(GrifaTextoDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([grifaTexto])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
