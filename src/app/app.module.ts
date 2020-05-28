import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbHeaderComponent } from './fb-header/fb-header.component';
import { FbHeaderItemComponent } from './fb-header/fb-header-item/fb-header-item.component';
import { FbFooterComponent } from './fb-footer/fb-footer.component';
import {MatButtonModule} from '@angular/material/button';
import { FbBannerGamesComponent } from './fb-container/fb-container-games/fb-banner-games/fb-banner-games.component';
import {FbBannerPeopleComponent} from './fb-container/fb-container-people/fb-banner-people/fb-banner-people.component';
import {FbContainerContactComponent} from './fb-container/fb-container-contact/fb-container-contact.component';
import { FbSeparatorComponent } from './fb-separator/fb-separator.component';
import {RouterModule, Routes} from '@angular/router';
import {FbContainerGamesComponent} from './fb-container/fb-container-games/fb-container-games.component';
import {FbContainerPeopleComponent} from './fb-container/fb-container-people/fb-container-people.component';

const appRoutes: Routes = [
  { path: 'games', component: FbContainerGamesComponent },
  { path: 'people', component: FbContainerPeopleComponent },
  { path: 'contact', component: FbContainerContactComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FbHeaderComponent,
    FbHeaderItemComponent,
    FbContainerContactComponent,
    FbFooterComponent,
    FbBannerGamesComponent,
    FbBannerPeopleComponent,
    FbSeparatorComponent,
    FbContainerGamesComponent,
    FbContainerPeopleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
