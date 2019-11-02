import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {ItemService} from '../../item.service';
import {publishBehavior} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  selectedGame: Item = null;
  item: Item;

  constructor(private itemService: ItemService) {
    document.body.scrollIntoView({behavior: 'smooth'});
    this.item = this.itemService.blogEntries();
  }}
