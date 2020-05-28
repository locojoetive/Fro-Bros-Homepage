import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fb-banner-games',
  templateUrl: './fb-banner-games.component.html',
  styleUrls: ['./fb-banner-games.component.scss']
})
export class FbBannerGamesComponent {
  @ViewChild('details') details: ElementRef;
  @ViewChild('main') main: ElementRef;
  @Input()
  refName: string;
  @Input()
  textColor: string;
  opened = false;

  onOpenDetails(open: boolean): void{
    this.opened = open;
    if (this.opened) {
      this.details.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } else {
      this.main.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
  }
}
