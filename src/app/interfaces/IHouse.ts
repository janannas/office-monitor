import { IRooms } from "./IRooms";

export interface IHouse {
  id: string;
  image: string;
  alt: string;
  rooms: IRooms[];
}
