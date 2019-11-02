import {Component, ElementRef, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Item} from '../../Item';

@Component({
  selector: 'games-content',
  templateUrl: './games-content.component.html',
  styleUrls: ['./games-content.component.scss']
})
export class GamesContentComponent implements  OnChanges {
  @ViewChild('content', {static: false}) contentHtmlElement: ElementRef;
  @Input() selectedGame: Item;
  @Output() displayingContent: boolean;

  ngOnChanges() {
    this.displayContent();
  }

  displayContent() {
    if (this.selectedGame) {
      this.contentHtmlElement.nativeElement.style.height = '100%';
      this.contentHtmlElement.nativeElement.style.paddingTop = '75px';
      this.contentHtmlElement.nativeElement.style.visibility = 'visible';
      this.contentHtmlElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
