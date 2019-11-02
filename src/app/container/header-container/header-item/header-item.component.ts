import {Component, Input} from '@angular/core';
import {HeaderItem} from './HeaderItem';

@Component({
  selector: 'header-item',
  template: `
      <div *ngIf="this.item && this.item.title ; else icon"
           class="header-items-wrapper">
          <div class="header-item-part start" *ngIf="!left"></div>
          <div class="header-item-part middle">{{this.item.title}}</div>
          <div class="header-item-part end" *ngIf="left"></div>
      </div>
      <ng-template #icon>
          <div id="image"></div>
      </ng-template>
  `,
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {
  @Input() item: HeaderItem;
  @Input() left: boolean;
}
