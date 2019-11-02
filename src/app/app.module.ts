import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ContainerComponent} from './container/container.component';
import {HeaderContainerComponent} from './container/header-container/header-container.component';
import {HeaderItemComponent} from './container/header-container/header-item/header-item.component';
import {FooterItemComponent} from './container/footer-item/footer-item.component';
import {IconComponent} from './container/footer-item/icon/icon.component';
import {ContactItemComponent} from './container/contact-item/contact-item.component';
import {ImageItemComponent} from './container/image-item/image-item.component';
import {GamesComponent} from './container/games/games.component';
import {ImageSubItemComponent} from './container/image-item/image-sub-item/image-sub-item.component';
import { HomeComponent } from './container/home/home.component';
import { GamesContentComponent } from './container/games/games-content/games-content.component';
import { PeopleComponent } from './container/people/people.component';
import { BlogComponent } from './container/blog/blog.component';
import { PeopleContentComponent } from './container/people/people-content/people-content.component';
import { ContentComponent } from './content/content.component';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  HttpClientModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderContainerComponent,
    HeaderItemComponent,
    ContactItemComponent,
    FooterItemComponent,
    IconComponent,
    LandingPageComponent,
    ImageItemComponent,
    ImageSubItemComponent,
    GamesComponent,
    HomeComponent,
    GamesContentComponent,
    PeopleComponent,
    BlogComponent,
    PeopleContentComponent,
    ContentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ...modules,
    BrowserAnimationsModule
  ],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
