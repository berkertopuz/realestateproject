import { Injectable } from '@angular/core';
import {House} from '../models/house';
import {Ahp} from '../models/ahp';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilterModel} from '../models/filterModel';
import {SuggestedHouse} from '../models/suggested-houses';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public houseFilters: House = new House();
  public ahp: Ahp = new Ahp();
  public allFilters: FilterModel = new FilterModel();
  public recommendedHouse: SuggestedHouse;
  public filteredHouse: SuggestedHouse[];
  constructor( private http: HttpClient) { }

  getFilteredHouse(allFilters: FilterModel) {
    this.allFilters.ahp= this.ahp;
    this.allFilters.filters= this.houseFilters;
    // let myHeaders = new Headers();
    // let myParams: any = [];
    // myParams.append('price_min', this.houseFilters.price_min.toString());
    // myParams.append('price_max', this.houseFilters.price_max.toString());
    // myParams.append('squaremeter_min', this.houseFilters.squaremeter_min.toString());
    // myParams.append('squaremeter_max', this.houseFilters.squaremeter_max.toString());
    // // let option = new RequestOptions({headers: myHeaders, params: myParams});

    this.http.post("http://localhost:3000/filter", allFilters, { headers: {'Content-Type': 'application/json'}, observe:'response'}).
    subscribe((data: any) => {
      console.log(data);
      this.recommendedHouse = (data.body.recomended_house);
      this.filteredHouse = data.body.filter_houses;
      console.log(this.filteredHouse[0]);
    });
  }

  public getHouseFilter(): House {
    return this.houseFilters;
  }

  public setLatLng (value: string) {
    this.houseFilters.base_point = value;
  }


  setSquareMeterMin(squaremeter_min: number) {
    this.houseFilters.squaremeter_min = squaremeter_min;
  }

  setSquareMeterMax(squaremeter_max: number) {
    this.houseFilters.squaremeter_max = squaremeter_max;
  }

  setNumberOfRooms(numberofrooms: string) {
    this.houseFilters.numberofrooms = numberofrooms;
    console.log(this.houseFilters);
  }

  setTimeToPrice(time_to_price: number) {
    this.ahp.time_to_price = time_to_price;
  }

  setPriceMax(price_max: number) {
    this.houseFilters.price_max = price_max;
  }

  setPriceMin(price_min: number) {
    this.houseFilters.price_min = price_min;
  }

  setHeating(heating: string) {
    this.houseFilters.heating = heating;
  }

  setAge(age: string) {
    this.houseFilters.age = age;
  }

  setBalcony(balcony: string) {
    this.houseFilters.balcony = balcony;
  }

  setEsyali(esyali: string) {
    this.houseFilters.esyali = esyali;
  }

  setSiteIcerisinde(SiteIcerisinde: string) {
    this.houseFilters.SiteIcerisinde = SiteIcerisinde;
  }

  setKat(kat: string) {
    this.houseFilters.kat = kat;
  }

  setMaxDuration(max_duration: number) {
    this.houseFilters.max_duration = max_duration;
  }

  setMetreToTime(metre_to_time: number) {
    this.ahp.metre_to_time = metre_to_time;
  }

  setPriceToMetre(price_to_metre: number) {
    this.ahp.price_to_metre = price_to_metre;
  }
}
