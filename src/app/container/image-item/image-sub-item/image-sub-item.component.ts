import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../Item';

@Component({
  selector: 'image-sub-item',
  templateUrl: './image-sub-item.component.html',
  styleUrls: ['./image-sub-item.component.scss']
})
export class ImageSubItemComponent {
  @Input() item: Item;
  @Output() selectedItem = new EventEmitter<Item>();

  onClick(): void {
    this.selectedItem.emit(this.item);
  }
}
