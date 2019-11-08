import {Component, OnInit} from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../../item.service';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styles: [`
      :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row;
      }
  `]
})
export class PeopleComponent {
  selectedPerson: Item = null;
  item: Item;

  constructor() {
    this.item = ItemService.people();
  }
}
