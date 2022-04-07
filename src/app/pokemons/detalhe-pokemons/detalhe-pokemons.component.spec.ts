import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DetalhePokemonsComponent } from "./detalhe-pokemons.component";

describe("DetalhePokemonsComponent", () => {
  let component: DetalhePokemonsComponent;
  let fixture: ComponentFixture<DetalhePokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetalhePokemonsComponent]
    });
    fixture = TestBed.createComponent(DetalhePokemonsComponent);
    component = fixture.componentInstance;
  });

  it("can load instance", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnChanges", () => {
    it("makes expected calls", () => {
      spyOn(component, "extrairIdUrl").and.callThrough();
      component.ngOnChanges();
      expect(component.extrairIdUrl).toHaveBeenCalled();
    });
  });
});
