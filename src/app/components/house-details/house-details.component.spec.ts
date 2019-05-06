import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "src/app/testing/activated-route-stub";

import { houseDetailsComponent } from "./house-details.component";

describe("houseDetailsComponent", () => {
  let component: houseDetailsComponent;
  let fixture: ComponentFixture<houseDetailsComponent>;

  const activatedRoute = new ActivatedRouteStub({ id: "house1" });

  beforeEach(async(() => {
    activatedRoute.setParamMap({ id: "house1" });

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [houseDetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(houseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("homes should have the length of 3", () => {
    expect(component.homes.length).toBe(3);
  });

  it("searchHouses should assign the correct name", () => {
    component.searchHouses("house1");
    expect(component.house.id).toBe("house1");
  });
});
