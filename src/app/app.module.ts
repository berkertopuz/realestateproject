import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FilteredHouseCardComponent } from './filtered-house-card/filtered-house-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterFormComponent,
    CardComponent,
    FilteredHouseCardComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
