import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { IRoomClimateService } from "../interfaces/IRoomClimateService";
import { IHouses } from "../interfaces/IHouses";

@Injectable({
  providedIn: "root"
})
export class MockRoomClimateService implements IRoomClimateService {
  /* mockHouse: IHouse = {
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
  }; */

  mockHouses: IHouses[] = [
    {
      house: {
        id: "house1",
        rooms: [
          {
            name: "Vardagsrum1",
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
            name: "Kök1",
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
            name: "Sovrum1",
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
      }
    },
    {
      house: {
        id: "house2",
        rooms: [
          {
            name: "Vardagsrum2",
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
            name: "Kök2",
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
            name: "Sovrum2",
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
      }
    },
    {
      house: {
        id: "house3",
        rooms: [
          {
            name: "Vardagsrum3",
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
            name: "Kök3",
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
            name: "Sovrum3",
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
      }
    }
  ];

  timerId: any;
  updateStarted: boolean = false;

  constructor() {}

  startClimateUpdate(): void {
    if (this.updateStarted) {
      return;
    } else {
      this.updateStarted = true;

      this.timerId = setInterval(() => {
        for (let i = 0; i < this.mockHouses.length; i++) {
          const rooms = this.mockHouses[i].house.rooms;
          //console.log(room);
          for (let i = 0; i < rooms.length; i++) {
            //console.log(rooms[i].updateHumidity);
            this.getRandomFloat(
              16,
              30,
              rooms[i].updateTemperature.bind(rooms[i])
            );
            this.getRandomFloat(0, 100, rooms[i].updateHumidity.bind(rooms[i]));
          }
        }
      }, 5000);
    }
  }

  getClimateData(): Observable<IHouses[]> {
    return of(this.mockHouses);
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
