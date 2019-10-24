import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'icon',
  template: `
      <a #anchor>
        <div #icon class="icon"></div>
      </a>
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {
  @Input() labelName: string;
  @Input() href: string;
  @ViewChild('icon', {static: false}) icon: ElementRef;
  @ViewChild('anchor', {static: false}) anchor: ElementRef;

  ngAfterViewInit() {
    this.icon.nativeElement.classList.add('icon-' + this.labelName);
    this.anchor.nativeElement.href = this.href;
  }
}
