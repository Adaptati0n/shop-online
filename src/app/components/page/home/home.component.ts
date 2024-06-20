import { Component, OnInit } from '@angular/core';
import { items } from "../../../../shared/models/items";
import { ItemsService } from "../../../../../frontend/services/items.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item: items[] = [];
  filteredItems: items[] = [];
  rate = 3;
  isReadonly = false;

  constructor(private itemService: ItemsService) {
    this.item = itemService.getAll();
    this.filteredItems = this.item;
    this.isReadonly = false;
  }

  ngOnInit() { }

  toggleFavorite(item: any) {
    item.favorite = !item.favorite;
  }

  filterItems(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const filter = selectElement.value;

    if (filter === 'all') {
      this.filteredItems = this.item;
    } else {
      this.filteredItems = this.item.filter(i => i.tags && i.tags.includes(filter));
    }
  }

  protected readonly items = items;
}
