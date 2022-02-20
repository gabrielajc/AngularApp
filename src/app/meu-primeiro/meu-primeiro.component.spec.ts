import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponent } from './meu-primeiro.component';

describe('MeuPrimeiroComponent', () => {
  let component: MeuPrimeiroComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
