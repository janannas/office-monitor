import { TestBed } from "@angular/core/testing";

import { MockRoomClimateService } from "./mock-room-climate.service";

describe("MockRoomClimateService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MockRoomClimateService = TestBed.get(MockRoomClimateService);
    expect(service).toBeTruthy();
  });

  it("mockHouses should contain 3 houses", () => {
    const service: MockRoomClimateService = TestBed.get(MockRoomClimateService);
    expect(service.mockHouses.length).toBe(3);
  });

  it("mockHouses.house.rooms should have the length of 3", () => {
    const service: MockRoomClimateService = TestBed.get(MockRoomClimateService);
    for (let i = 0; i < service.mockHouses.length; i++) {
      expect(service.mockHouses[i].house.rooms.length).toBe(3);
    }
  });

  it("should not update if update has already started", () => {
    const service: MockRoomClimateService = TestBed.get(MockRoomClimateService);
    expect(service.updateStarted).toEqual(false);
    service.startClimateUpdate();
    expect(service.updateStarted).toEqual(true);
  });

  it("getRandomFloat should return a random number within a specified range through a specified callback", () => {
    const service: MockRoomClimateService = TestBed.get(MockRoomClimateService);
    const testReturn = function(number: number) {
      return number;
    };
    const value = service.getRandomFloat(0, 1, testReturn);

    expect(value).toBeLessThan(2);
  });
});
