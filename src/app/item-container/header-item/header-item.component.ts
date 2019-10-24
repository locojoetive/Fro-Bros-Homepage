import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'header-item',
  template: `
      <div #header class="wrapper">
          <header-sub-item (click)="this.scrollTo(0)"
                           [name]="'About Games'"
                           [left]="true">
          </header-sub-item>
          <header-sub-item [left]="true"
                           [name]="'About Us'"
                           (click)="this.scrollTo(1)">
          </header-sub-item>
          <header-sub-item [name]=""
                           (click)="this.scrollTo(2)">
          </header-sub-item>
          <header-sub-item [name]="'News'"
                           (click)="this.scrollTo(3)">
          </header-sub-item>
          <header-sub-item [name]="'Contact'"
                           (click)="this.scrollTo(4)">
          </header-sub-item>
      </div>
  `,
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements AfterViewInit {
  @ViewChild('header', {static: false}) header: ElementRef;

  ngAfterViewInit() {
    this.manageHeader();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.manageHeader();
  }

  private manageHeader(): void {
    const scrollOffset = window.scrollY - this.header.nativeElement.offsetHeight;
    const image = this.header.nativeElement.querySelector('#image');
    if (scrollOffset > 0) {
      this.header.nativeElement.classList.add('wrapper-scrolled');
      this.header.nativeElement.classList.remove('wrapper-not-scrolled');
      image.style.height = '100%';
      image.style.backgroundImage = 'url(assets/images/icon-transparent.png)';
    } else {
      this.header.nativeElement.classList.remove('wrapper-scrolled');
      this.header.nativeElement.classList.add('wrapper-not-scrolled');
      image.style.height = '200%';
      image.style.backgroundImage = 'url(assets/images/icon.png)';
    }
  }

  scrollTo(count: number) {
    switch (count) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;

    }
  }
}
