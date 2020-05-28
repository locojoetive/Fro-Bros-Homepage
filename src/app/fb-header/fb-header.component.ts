/*
 * Sticky header animation from Tomasz Kula
 * https://github.com/zetsnotdead/ng-reactive-sticky-header
*/

import {AfterViewInit, Component, HostBinding} from '@angular/core';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';
import {Direction} from './Direction';
import {VisibilityState} from './VisibilityState';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-fb-header',
  templateUrl: './fb-header.component.html',
  styleUrls: ['./fb-header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class FbHeaderComponent  implements AfterViewInit {
  activeView = 0;
  isVisible = true;


  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 > y1 ?  Direction.Down : Direction.Up)),
      distinctUntilChanged(),
      share()
    );
    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => this.isVisible = true);
    scrollDown$.subscribe(() => this.isVisible = false);
  }

  onPropagateActiveView(activeView: number) {
    console.log(`current active view is ${activeView}`);
    this.activeView = activeView;
  }
}
