import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { WeatherService } from '../shared/weather-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ForecastComponent } from '.././forecast/forecast.component'
import { WeatherComponent } from '.././weather/weather.component'

@Component({
  selector: 'app-my-cities',
  templateUrl: './my-cities.component.html',
  styleUrls: ['./my-cities.component.css'],
})

export class MyCitiesComponent implements OnInit {
  cities: Array<City>;
  selectedCity;
  weatherData;

  constructor(private weatherService: WeatherService, private toastsManager: ToastsManager
    , vRef: ViewContainerRef) {
      this.toastsManager.setRootViewContainerRef(vRef);
  }
  ngOnInit() {

  }

  searchCity(city){
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.getCorrectCities(data, city);
      this.weatherData = data;
      if(this.cities.length == 0){
        this.toastsManager.warning("", "Ciry not found!", {toastLife: 3000});
      }
    });
  }

  selectCity(id){
    this.selectedCity = this.weatherData.query.results.channel[id];
  }

  getCorrectCities(data, city){
    this.cities = new Array<City>();
    for (let i = 0; i < data.query.results.channel.length; i++) { 
      let currentCityData = data.query.results.channel[i];
      var currentCityIndex = currentCityData.title.indexOf(city);
      if(currentCityIndex > -1){
        var title = currentCityData.title.substring(currentCityIndex, currentCityData.title.length);
        this.cities.push(
          {
            id: i,
            name: city,
            description: title
          })
        }
    }
  }

}

class City {
    id: number;
    name: string;
    description: string;
}
