import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DebugFormComponent } from './debug-form.component';

describe('DebugFormComponent', () => {
  let component: DebugFormComponent;
  let fixture: ComponentFixture<DebugFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DebugFormComponent]
    });
    fixture = TestBed.createComponent(DebugFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
