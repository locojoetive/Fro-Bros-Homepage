import {Component, ElementRef, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {Item} from '../container/Item';

@Component({
  selector: 'frobros-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges {
  @ViewChild('content', {static: false}) contentHtmlElement: ElementRef;
  @Input() selectedItem: Item = null;

  ngOnChanges() {
    this.displayContent();
  }

  displayContent() {
    if (this.selectedItem && this.contentHtmlElement) {
      this.contentHtmlElement.nativeElement.style.height = 'auto';
      this.contentHtmlElement.nativeElement.style.paddingTop = '75px';
      this.contentHtmlElement.nativeElement.style.visibility = 'visible';
      setTimeout(() =>
          this.contentHtmlElement.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'})
        , 100);
    }
  }
}
