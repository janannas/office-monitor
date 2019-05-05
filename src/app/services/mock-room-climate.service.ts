import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { IRoomClimateService } from "../interfaces/IRoomClimateService";
import { IHouse } from "../interfaces/IHouse";

@Injectable({
  providedIn: "root"
})
export class MockRoomClimateService implements IRoomClimateService {
  mockHouse: IHouse = {
    rooms: [
      {
        name: "Vardagsrum",
        temperature: 24.5,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 26,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      },
      {
        name: "Kök",
        temperature: 28.1,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 88.9,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      },
      {
        name: "Sovrum",
        temperature: 18.8,
        updateTemperature(temperature: number) {
          return (this.temperature = temperature);
        },
        humidity: 3.3,
        updateHumidity(humidity: number) {
          return (this.humidity = humidity);
        }
      }
    ]
  };

  timerId: any;
  updateStarted: boolean = false;

  constructor() {}

  startClimateUpdate(): void {
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
      Math.floor(Math.random() * 10);

    return fn(randomFloat);
  }

  destroyClimateUpdate() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
