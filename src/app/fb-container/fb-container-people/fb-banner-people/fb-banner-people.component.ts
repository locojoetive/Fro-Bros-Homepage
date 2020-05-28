import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-fb-banner-people',
  templateUrl: './fb-banner-people.component.html',
  styleUrls: ['./fb-banner-people.component.scss']
})
export class FbBannerPeopleComponent {
  @Input()
  refName: string;
  @Input()
  alignment: string;

}
