import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { DetailsComponent } from "./details.component";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [DetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("house should have the length of 3", () => {
    expect(component.house.rooms.length).toBe(3);
  });

  it("searchRooms should return the the correct name", () => {
    expect(component.room).toBeUndefined();
    component.searchRooms("Vardagsrum");
    expect(component.room.name).toBe("Vardagsrum");
  });
});
