import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-filtered-house-card',
  templateUrl: './filtered-house-card.component.html',
  styleUrls: ['./filtered-house-card.component.css']
})
export class FilteredHouseCardComponent implements OnInit {

  constructor(public mapService: MapService) { }

  ngOnInit() {
  }

}
