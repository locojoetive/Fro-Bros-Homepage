import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {HeaderItem} from './header-item/HeaderItem';
import {ItemService} from '../../item.service';

@Component({
  selector: 'header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements AfterViewInit {
  @ViewChild('header', {static: false}) header: ElementRef;
  items: HeaderItem[];
  showMenu = false;
  showContent = false;

  constructor(private itemService: ItemService) {
    this.items = itemService.mainHeaderItems();
  }


  ngAfterViewInit() {
    this.onResize();
  }

  public setHeaderOpacity(): void {
    const scrollOffset = window.scrollY - this.header.nativeElement.offsetHeight;
    const image = this.header.nativeElement.querySelector('#image');
    if (scrollOffset > 0) {
      this.header.nativeElement.classList.add('wrapper-scrolled');
      this.header.nativeElement.classList.remove('wrapper-not-scrolled');
      if (!this.showMenu) {
        image.style.height = '100%';
      }
      image.style.backgroundImage = 'url(assets/images/icon-transparent.png)';
    } else {
      this.header.nativeElement.classList.remove('wrapper-scrolled');
      this.header.nativeElement.classList.add('wrapper-not-scrolled');
      if (!this.showMenu) {
        image.style.height = '200%';
      }
      image.style.backgroundImage = 'url(assets/images/icon.png)';
    }
  }


  onResize(): void {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.showMenu = width < 768;
    this.setHeaderOpacity();
  }

  onExpand(): void {
    this.showContent = true;
  }

  onCollapse(): void {
    this.showContent = false;
  }
}
