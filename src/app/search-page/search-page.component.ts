import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public constructor(public mapService: MapService) {}

  ngOnInit() {
  }

}
