import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePokemonsComponent } from './detalhe-pokemons.component';

describe('DetalhePokemonsComponent', () => {
  let component: DetalhePokemonsComponent;
  let fixture: ComponentFixture<DetalhePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
