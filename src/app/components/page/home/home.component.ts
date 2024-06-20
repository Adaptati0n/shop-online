import { Component, OnInit } from '@angular/core';
import { items } from "../../../../shared/models/items";
import { sample_items } from '../../../../data';
import { ItemsService } from "../../../../../frontend/services/items.service";

interface Brand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: items[] = sample_items;
  selectedBrand: string = 'Shop-Online';
  filteredItems: items[] = [];
  brands: Brand[] = [
    {
      name: 'Nike',
      logo: 'https://res.cloudinary.com/dmubfrefi/image/private/s--6QpPmvm2--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_1920/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAACwmBs'
    },
    {
      name: 'Adidas',
      logo: 'https://static.vecteezy.com/ti/vecteur-libre/p3/10994325-logo-adidas-symbole-blanc-icone-de-conception-de-vetements-football-abstrait-illustrationle-avec-fond-noir-gratuit-vectoriel.jpg'
    },
    {name: 'Puma', logo: 'https://static.vecteezy.com/ti/vecteur-libre/p1/10994248-logo-puma-symbole-blanc-icone-de-conception-de-vetements-football-abstrait-illustrationle-avec-fond-noir-gratuit-vectoriel.jpg'}
  ];


  constructor() {
  }


  ngOnInit() {
    this.filterByBrand(this.brands[0]);
  }

  filterItems(event: any) {
    const filterValue = event.target.value;
    if (filterValue === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.category === filterValue);
    }
  }

  filterByBrand(brand: Brand) {
    this.filteredItems = this.items.filter(item => item.brand === brand.name);
  }

  toggleFavorite(item: items) {
    item.favorite = !item.favorite;
  }

  selectBrand(brand: any) {
    this.selectedBrand = brand.name;
    this.filterByBrand(brand);
  }
}
