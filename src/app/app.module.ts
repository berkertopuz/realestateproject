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
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import {appRoutingModule} from './app.routing';
import { SearchPageComponent } from './search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterFormComponent,
    CardComponent,
    FilteredHouseCardComponent,
    AboutUsComponent,
    HowItWorksComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
