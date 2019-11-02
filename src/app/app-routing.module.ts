import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {GamesComponent} from './container/games/games.component';
import {HomeComponent} from './container/home/home.component';
import {PeopleComponent} from './container/people/people.component';
import {BlogComponent} from './container/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/games',
    component: GamesComponent,
  },
  {
    path: 'home/people',
    component: PeopleComponent,
  },
  {
    path: 'home/blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
