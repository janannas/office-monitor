import { IHouse } from "./IHouse";
import { Observable } from "rxjs";

export interface IRoomClimateService {
  mockHouse: IHouse;
  timerId: any;
  updateStarted: boolean;
  startClimateUpdate: VoidFunction;
  getClimateData: () => Observable<IHouse>;
  getRandomFloat: Function;
  destroyClimateUpdate: VoidFunction;
}
