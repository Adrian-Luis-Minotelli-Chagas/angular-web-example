import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./shopping-caart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() { }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  removeItem(item: any): void {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }

}
