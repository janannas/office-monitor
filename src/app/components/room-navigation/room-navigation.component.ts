import { Component, OnInit } from "@angular/core";
import { MockRoomClimateService } from "src/app/services/mock-room-climate.service";
import { IRooms } from "src/app/interfaces/IRooms";

@Component({
  selector: "app-room-navigation",
  templateUrl: "./room-navigation.component.html",
  styleUrls: ["./room-navigation.component.scss"]
})
export class RoomNavigationComponent implements OnInit {
  rooms: IRooms[];

  constructor(private service: MockRoomClimateService) {
    //Update is specified to run every 5:th second inside service
    this.service.startClimateUpdate();

    this.service.getClimateData().subscribe(
      myClimateData => {
        this.rooms = myClimateData.rooms;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
