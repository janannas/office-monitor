import { Injectable } from "@angular/core";
import { IHouse } from "../interfaces/IHouse";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MockRoomClimateService {
  mockHouse = {
    rooms: [
      {
        name: "Vardagsrum",
        temperature: 24,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 2,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      },
      {
        name: "Kök",
        temperature: 28,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 0.95,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      },
      {
        name: "Sovrum",
        temperature: 18,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 0.33,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      }
    ]
  };

  timerId: any;
  updateStarted: boolean = false;

  constructor() {}

  startClimateUpdate() {
    if (this.updateStarted) {
      return;
    } else {
      this.updateStarted = true;

      this.timerId = setInterval(() => {
        for (let i = 0; i < this.mockHouse.rooms.length; i++) {
          const room = this.mockHouse.rooms[i];

          this.getRandomFloat(16, 30, room.updateTemperature.bind(room));
          this.getRandomFloat(0, 100, room.updateHumidity.bind(room));
        }
      }, 5000);
    }
  }

  getClimateData(): Observable<IHouse> {
    return of(this.mockHouse);
  }

  getRandomFloat(min: number, max: number, fn: Function): Function {
    let randomFloat =
      Math.floor(Math.random() * (max - min + 1)) +
      min +
      "." +
      Math.floor(Math.random() * 100);

    return fn(randomFloat);
  }

  destroyClimateUpdate() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
