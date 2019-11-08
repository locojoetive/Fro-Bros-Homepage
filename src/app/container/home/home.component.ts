import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../../item.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: Item[];
  constructor(private itemService: ItemService) {
    this.items = ItemService.mainItems();
  }
}
