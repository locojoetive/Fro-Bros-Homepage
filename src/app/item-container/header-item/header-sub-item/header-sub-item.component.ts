import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'header-sub-item',
  template:  `
      <div *ngIf="name; else icon"
           class="wrapper">
          <div class="header-item start"><p *ngIf="!left">|</p></div>
          <div class="header-item middle">{{name}}</div>
          <div class="header-item end"><p *ngIf="left">|</p></div>
      </div>
      <ng-template #icon>
          <div id="image"></div>
      </ng-template>
  `,
  styleUrls: ['./header-sub-item.component.scss']
})
export class HeaderSubItemComponent {
  @Input() name: string;
  @Input() left: boolean;

  constructor() {
    this.name = '';
  }
}
