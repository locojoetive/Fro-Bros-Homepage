import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {TextContentService} from '../text-content.service';
import {Item} from '../item-container/Item';

export interface Content {
  title: string;
  text: string;
}

@Component({
  selector: 'image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements AfterViewInit {
  @Input() item: Item;
  @Input() reverse = false;
  @Output() emitContent = new EventEmitter<Content>();
  @ViewChild('container', {static: false}) containerElement;
  @ViewChild('mainItem', {static: false}) mainItemElement;
  @ViewChild('contentItem', {static: false}) contentElement;


  content: Content;
  displayingSubItems: boolean;
  displayingContent: boolean;

  constructor(private textContentService: TextContentService) {
  }

  ngAfterViewInit() {
    this.initializeContent();
  }

  displayOrHideSubItems(): void {
    this.displayingSubItems = !this.displayingSubItems;
    this.mainItemElement.nativeElement.style.width = this.displayingSubItems ? '50%' : '100%';
  }

  displayOrHideContent(display: boolean): void {
    this.displayingContent = display;
    if (!this.displayingContent) {
      this.containerElement.nativeElement.style.height = '100%';
      this.mainItemElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else {
      this.containerElement.nativeElement.style.height = '200%';
      const contentElement = document.getElementById('#content-item')
      console.log(contentElement);
      this.contentElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  onClick(): void {
    if (this.item.subItems.length > 0) {
      this.displayOrHideSubItems();
    } else {
      this.emitContent.emit(this.content);
    }
  }

  onContentUpdate(event: Content): void {
    this.content = event;
    this.displayOrHideContent(true);
  }

  private initializeContent(): void {
    if (this.item.subItems.length === 0) {
      const title = this.item.title.replace(/\s/g, '');
      this.textContentService.readContentFor(title).subscribe(data => {
        this.content = {
          title: this.item.title,
          text: data,
        };
      });
    }
  }
}
