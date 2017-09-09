import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  selectedCityModel;

  @Input('selectedCity') set selectedCity(selectedCity: any) {
    this.selectedCityModel = selectedCity;
  }

  ngOnInit() {
  }

}
