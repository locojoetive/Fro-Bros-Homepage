import {Component} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  onActivate(component: any) {
    this.displayHeader = this.router.url.substr(0, 5) === '/home';
    if (this.router.url === '/home#contacts') {
      setTimeout(() =>
          document.getElementById('contact-wrapper').scrollIntoView({behavior: 'smooth'})
        , 100);
    } else {
    }
  }
}
