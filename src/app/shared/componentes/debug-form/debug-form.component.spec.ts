import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugFormComponent } from './debug-form.component';

describe('DebugFormComponent', () => {
  let component: DebugFormComponent;
  let fixture: ComponentFixture<DebugFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
