import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <container [displayHeader]="this.displayHeader">
          <router-outlet (activate)="this.onActivate($event)"></router-outlet>
      </container>
  `,
  styles: [`
      :host {
          height: 100%;
      }
  `]
})

export class AppComponent {
  displayHeader = false;

  onActivate(component: any) {
    this.displayHeader = component.items || component.item;
    console.log(component);
  }
}
