import { Component } from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../../item.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  item: Item = null;
  displayContent: boolean;

  constructor(private itemService: ItemService) {
    document.body.scrollIntoView({behavior: 'smooth'});
    this.item = ItemService.blogEntries();
    console.log('Bau jetzt ', this.item);
  }
}
