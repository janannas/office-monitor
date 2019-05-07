import { Component, OnInit } from "@angular/core";
import { MockRoomClimateService } from "src/app/services/mock-room-climate.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { IHouses } from "src/app/interfaces/IHouses";
import { IHouse } from "src/app/interfaces/IHouse";

@Component({
  selector: "app-house-details",
  templateUrl: "./house-details.component.html",
  styleUrls: ["./house-details.component.scss"]
})
export class houseDetailsComponent implements OnInit {
  houses: IHouses[];
  house: IHouse;

  constructor(
    private route: ActivatedRoute,
    private service: MockRoomClimateService
  ) {
    //Update is specified to run every 5:th second inside service
    this.service.startClimateUpdate();

    this.service.getClimateData().subscribe(
      myHouseData => {
        this.houses = myHouseData;

        this.route.paramMap.subscribe((myParams: ParamMap) => {
          let house = myParams.get("id");

          this.searchHouses(house);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  searchHouses(myId: string): void {
    for (let i = 0; i < this.houses.length; i++) {
      const elem = this.houses[i].house;

      if (myId == String(elem.id)) {
        this.house = elem;
      }
    }
  }

  ngOnInit() {}
}
