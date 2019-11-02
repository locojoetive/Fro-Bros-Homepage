import {Component, ElementRef, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Item} from '../../Item';

@Component({
  selector: 'people-content',
  templateUrl: './people-content.component.html',
  styleUrls: ['./people-content.component.scss']
})
export class PeopleContentComponent implements OnChanges {
  @ViewChild('content', {static: false}) contentHtmlElement: ElementRef;
  @Input() selectedPerson: Item;
  @Output() displayingContent: boolean;

  ngOnChanges() {
    this.displayContent();
  }

  displayContent() {
    if (this.selectedPerson) {
      console.log('people content ', this.selectedPerson);
      this.contentHtmlElement.nativeElement.style.height = '100%';
      this.contentHtmlElement.nativeElement.style.paddingTop = '75px';
      this.contentHtmlElement.nativeElement.style.visibility = 'visible';
      this.contentHtmlElement.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
