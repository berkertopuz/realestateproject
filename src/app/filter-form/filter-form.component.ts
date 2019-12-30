import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';
import {House} from '../models/house';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  public squaremeter_min: number;
  public squaremeter_max: number;
  public price_min: number;
  public price_max: number;
  public numberofrooms: string = null;
  public time_to_price: number;
  public price_to_metre: number;
  public metre_to_time: number;
  public heating: string = null;
  public age: string = null;
  public balcony: string = null;
  public esyali: string = null;
  public SiteIcerisinde: string = null;
  public kat: string = null;
  public max_duration: number;

  public constructor (public mapService: MapService ){
  }

  ngOnInit() {
  }

  setValues() {
    this.mapService.setSquareMeterMin(this.squaremeter_min);
    this.mapService.setSquareMeterMax(this.squaremeter_max);
    this.mapService.setPriceMin(this.price_min);
    this.mapService.setPriceMax(this.price_max);

    if(this.numberofrooms=="null"){
      this.mapService.setNumberOfRooms(null);
    } else {
      this.mapService.setNumberOfRooms(this.numberofrooms);
    }

    if (this.heating=="null"){
      this.mapService.setHeating(null);
    } else {
    this.mapService.setHeating(this.heating);
    }

    if (this.age=="null"){
      this.mapService.setAge(null);
    } else {
      this.mapService.setAge(null);
    }

    if (this.balcony=="null") {
      this.mapService.setBalcony(null);
    } else {
      this.mapService.setBalcony(this.balcony);
    }

    if (this.esyali=="null") {
      this.mapService.setEsyali(null);
    } else {
      this.mapService.setEsyali(this.esyali);
    }

    if (this.SiteIcerisinde=="null") {
      this.mapService.setSiteIcerisinde(null);
    } else {
      this.mapService.setSiteIcerisinde(this.SiteIcerisinde);
    }

    if (this.kat=="null") {
      this.mapService.setKat(null);
    } else {
      this.mapService.setKat(this.kat);
    }

    this.mapService.setMaxDuration(this.max_duration);
    if (this.price_to_metre<0){
      this.mapService.setPriceToMetre(1/Math.abs(this.price_to_metre));
    } else {
      this.mapService.setPriceToMetre(this.price_to_metre);
    }
    if(this.metre_to_time<0){
      this.mapService.setMetreToTime(1/Math.abs(this.metre_to_time));
    } else {
      this.mapService.setMetreToTime(this.metre_to_time);
    }
    if(this.time_to_price<0){
      this.mapService.setTimeToPrice(1/Math.abs(this.time_to_price));
    } else {
      this.mapService.setTimeToPrice(this.time_to_price);
    }

    this.send();
  }

  send() {
  this.mapService.getFilteredHouse(this.mapService.allFilters);
  }
}
