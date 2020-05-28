import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-fb-header-item',
  template: `
    <div>
        <button [ngClass]="{'selected': active}"
                [routerLink]="this.link"
                (click)="propagateActiveButton.emit(this.buttonId)"
                mat-mini-fab color="primary"
                routerLinkActive="active">
            {{ this.headerTitle }}
        </button>
    </div>
  `,
  styleUrls: ['./fb-header-item.component.scss']
})
export class FbHeaderItemComponent implements OnChanges {
  @Input()
  headerTitle: string;
  @Input()
  link: string;
  @Input()
  buttonId: number;
  @Input()
  active: boolean;
  @Output()
  propagateActiveButton = new EventEmitter<number>();

  ngOnChanges(changes:SimpleChanges) {
    if (changes.active && changes.active.currentValue) {

    }
  }
}
