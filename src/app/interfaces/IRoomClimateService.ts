import { IHouses } from "./IHouses";
import { Observable } from "rxjs";

export interface IRoomClimateService {
  mockHouses: IHouses[];
  timerId: any;
  updateStarted: boolean;
  startClimateUpdate: VoidFunction;
  getClimateData: () => Observable<IHouses[]>;
  getRandomFloat: Function;
  destroyClimateUpdate: VoidFunction;
}
