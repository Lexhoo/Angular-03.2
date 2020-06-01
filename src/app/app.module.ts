import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YellowDirective } from './yellow.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { FirstDirective } from './first.directive';
import { MoviesListDirective } from './movies-list.directive';


@NgModule({
  declarations: [
    AppComponent,
    YellowDirective,
    DisplayGuestsDirective,
    FirstDirective,
    MoviesListDirective,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
