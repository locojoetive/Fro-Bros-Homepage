import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <container [displayHeader]="this.displayHeader">
          <router-outlet></router-outlet>
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
}
