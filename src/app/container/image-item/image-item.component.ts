import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {Item} from '../Item';

@Component({
  selector: 'image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements AfterViewInit {
  @ViewChild('mainItem', {static: false}) mainItemElement;
  @ViewChild('subItems', {static: false}) subItemsHtmlElement;
  @Input() item: Item;
  @Input() reverse = false;
  @Input() displayingSubItems: boolean;
  @Output() selectedItem = new EventEmitter<Item>();

  ngAfterViewInit() {
    this.modifyView();
  }

  onItemUpdate(event: Item): void {
    this.selectedItem.emit(event);
  }

  private modifyView() {
    if (this.subItemsHtmlElement) {
      const numberOfSubItems = this.subItemsHtmlElement ? this.item.subItems.length : 0;
      if (numberOfSubItems > 0) {
        this.subItemsHtmlElement.nativeElement.style.height = '100%';
        this.subItemsHtmlElement.nativeElement.style.display = 'grid';
        if (numberOfSubItems === 1) {
          this.subItemsHtmlElement.nativeElement.style.height = '100%';
          this.subItemsHtmlElement.nativeElement.style.width = '100%';
        } else if (numberOfSubItems === 2) {
          this.subItemsHtmlElement.nativeElement.style.gridTemplateColumns = '50% 50%';
          this.subItemsHtmlElement.nativeElement.style.gridTemplateRows = '100%';
        } else if (numberOfSubItems > 2 && numberOfSubItems <= 4) {
          this.subItemsHtmlElement.nativeElement.style.gridTemplateColumns = '50% 50%';
          this.subItemsHtmlElement.nativeElement.style.gridTemplateRows = '50% 50%';
        }
      }
    }
  }
}
