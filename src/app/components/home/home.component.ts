import { Component, OnInit } from "@angular/core";
import { MockRoomClimateService } from "src/app/services/mock-room-climate.service";
import { IHouses } from "src/app/interfaces/IHouses";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  houses: IHouses[];

  constructor(private service: MockRoomClimateService) {
    this.service.getClimateData().subscribe(
      myHouseData => {
        this.houses = myHouseData;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
