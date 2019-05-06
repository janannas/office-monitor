import { Component, OnInit } from "@angular/core";
import { MockRoomClimateService } from "src/app/services/mock-room-climate.service";
import { ActivatedRoute } from "@angular/router";
import { IHouses } from "src/app/interfaces/IHouses";
import { IHouse } from "src/app/interfaces/IHouse";

@Component({
  selector: "app-house-details",
  templateUrl: "./house-details.component.html",
  styleUrls: ["./house-details.component.scss"]
})
export class houseDetailsComponent implements OnInit {
  homes: IHouses[];
  house: IHouse;

  constructor(
    private route: ActivatedRoute,
    private service: MockRoomClimateService
  ) {
    //Update is specified to run every 5:th second inside service
    this.service.startClimateUpdate();

    this.service.getClimateData().subscribe(
      housesData => {
        this.homes = housesData;

        this.route.paramMap.subscribe(myParams => {
          let house = myParams.get("id");
          this.searchHouse(house);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  searchHouse(myId: string): void {
    for (let i = 0; i < this.homes.length; i++) {
      const elem = this.homes[i].house;

      if (myId == String(elem.id)) {
        this.house = elem;
      }
    }
  }

  ngOnInit() {}
}
