import { Component } from '@angular/core';
import {Item} from './Item';


@Component({
  selector: 'item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent {
  items: Item[] = [
    new Item('About Games', 'assets/images/Banner-0.png'),
    new Item('About Us', 'assets/images/Banner-1.png'),
    new Item('Blog', 'assets/images/Banner-2.png'),
  ];

  constructor() {
    this.items[0].addSubItems([
      new Item('Paper Fighter', 'assets/images/Sub=Banner-0-0.png'),
      new Item('Wrath of the Ninja', 'assets/images/Sub=Banner-0-1.png'),
      new Item('Wait a Minute Mr. Postman', 'assets/images/Sub=Banner-0-2.png'),
      new Item('Beware of the Psyder', 'assets/images/Sub=Banner-0-3.png'),
    ]);
    this.items[1].addSubItems([
      new Item('Herrnock', 'assets/images/Sub=Banner-1-0.png'),
      new Item('Locojoetive', 'assets/images/Sub=Banner-2-1.png'),
    ]);
  }
}
