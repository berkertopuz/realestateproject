import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import {House} from 'src/app/models/house';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

    ngOnInit(): void {
    }

  public house: House = new House();

  public constructor (public mapService: MapService ){
  }

  center = {lat: 41.13572739166863, lng: 29.03191352802719};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 12;
  display?: google.maps.LatLngLiteral;

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
    console.log(this.markerPositions.length);
    this.mapService.setLatLng(event.latLng.toJSON().lat + ',' + event.latLng.toJSON().lng);
    if (this.markerPositions.length > 1) {
      this.removeLastMarker();
    }
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.shift();
  }
}
