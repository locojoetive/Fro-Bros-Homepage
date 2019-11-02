import {AfterViewInit, Component, Input} from '@angular/core';
import {Item} from './Item';
import {TextContentService} from '../text-content.service';
import {HeaderItem} from './header-container/header-item/HeaderItem';


@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() headerItems: HeaderItem[];
  @Input() displayHeader: boolean;
}
