import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { MapComponent } from './map/map.component';
import { InformationComponent } from './map/information/information.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule,  } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    SearchToolbarComponent,
    MapComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
