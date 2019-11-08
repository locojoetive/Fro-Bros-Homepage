import {Component} from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../../item.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  selectedGame: Item = null;
  item: Item;

  constructor() {
    this.item = ItemService.games();
  }
}
