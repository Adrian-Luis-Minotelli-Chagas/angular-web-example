import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "app/restaurants/restaurant/restaurant.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html"
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(
      this.router.parent.snapshot.params['id']
    );
  }
}
