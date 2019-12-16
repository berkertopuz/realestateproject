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
    this.mapService.setNumberOfRooms(this.numberofrooms);
    this.mapService.setTimeToPrice(this.time_to_price);
    this.mapService.setSquareMeterMax(this.squaremeter_max);
    this.mapService.setPriceMin(this.price_min);
    this.mapService.setPriceMax(this.price_max);
    this.mapService.setHeating(this.heating);
    this.mapService.setAge(this.age);
    this.mapService.setBalcony(this.balcony);
    this.mapService.setEsyali(this.esyali);
    this.mapService.setSiteIcerisinde(this.SiteIcerisinde);
    this.mapService.setKat(this.kat);
    this.mapService.setMaxDuration(this.max_duration);
    this.mapService.setPriceToMetre(this.price_to_metre);
    this.mapService.setMetreToTime(this.metre_to_time);
    this.send();
  }

  send() {
  this.mapService.getFilteredHouse(this.mapService.allFilters);
  }
}
