import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MockRoomClimateService } from "src/app/services/mock-room-climate.service";
import { IHouse } from "src/app/interfaces/IHouse";
import { IRooms } from "src/app/interfaces/IRooms";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  house: IHouse;
  room: IRooms;

  constructor(
    private route: ActivatedRoute,
    private service: MockRoomClimateService
  ) {
    //Update is specified to run every 5:th second inside service
    this.service.startClimateUpdate();

    this.service.getClimateData().subscribe(
      roomsData => {
        this.house = roomsData;

        this.route.paramMap.subscribe(myParams => {
          let room = myParams.get("id");

          this.searchRooms(room);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  searchRooms(myId: string): void {
    for (let i = 0; i < this.house.rooms.length; i++) {
      const elem = this.house.rooms[i];

      if (myId == String(elem.name)) {
        this.room = elem;
      }
    }
  }
  ngOnInit() {}
}
