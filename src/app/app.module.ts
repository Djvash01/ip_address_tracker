import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchToolbarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
