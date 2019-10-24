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
import {ItemContainerComponent} from './item-container/item-container.component';
import {HeaderItemComponent} from './item-container/header-item/header-item.component';
import {HeaderSubItemComponent} from './item-container/header-item/header-sub-item/header-sub-item.component';
import {ContactItemComponent} from './item-container/contact-item/contact-item.component';
import {FooterItemComponent} from './item-container/footer-item/footer-item.component';
import {IconComponent} from './item-container/footer-item/icon/icon.component';
import { ImageItemComponent } from './image-item/image-item.component';


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
    ItemContainerComponent,
    HeaderItemComponent,
    HeaderSubItemComponent,
    ContactItemComponent,
    FooterItemComponent,
    IconComponent,
    LandingPageComponent,
    ImageItemComponent,
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
