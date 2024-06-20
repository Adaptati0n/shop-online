import { Injectable } from '@angular/core';
import { sample_items} from "../../src/data";
import { items } from '../../src/shared/models/items';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getAll():items[]{
    return sample_items;
  }
}
