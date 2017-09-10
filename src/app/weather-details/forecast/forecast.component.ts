import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TemperaturePipe } from '../../pipes/temperature.pipe'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  
  constructor() { }

  forecastModel;

  @Input('selectedCity') set selectedCity(selectedCity: any) {
        this.forecastModel = selectedCity.item.forecast;
    }

  ngOnInit() {
  }

}
