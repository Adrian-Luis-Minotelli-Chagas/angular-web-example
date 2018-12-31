import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestaurantService } from "app/restaurants/restaurant/restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem>;

  constructor(
    private restaurantService: RestaurantService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(
      this.router.parent.snapshot.params['id']
    );
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
