import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public constructor (public mapService: MapService ){
  }

  ngOnInit() {
  }

}
