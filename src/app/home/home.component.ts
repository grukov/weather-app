import { Component, OnInit } from '@angular/core';
import { Injectable, ViewContainerRef } from '@angular/core';
import { WeatherService } from '../shared/weather-service.service';
import { LocationService } from 'app/shared/location.service';
import { City } from '../../models/city.model';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: Array<City>;
  selectedCity;
  weatherData;

  ngOnInit() {
    let city;

    this.locationService.getLocation().subscribe(location => {
      console.log(location);

      // this.weatherService.getWeatherData(location.city).subscribe(data => {
      //   this.data = data;
      //   console.log(this.data);
      //   let channels = this.data.query.results.channel;
      //   this.image = channels[1].image.url;
      // });
    });
  }


  constructor(private weatherService: WeatherService, private toastsManager: ToastsManager
    , vRef: ViewContainerRef, private locationService: LocationService) {
    this.toastsManager.setRootViewContainerRef(vRef);
  }

  addToFavorites(city){
    
  }

  searchCity(city) {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.getCorrectCities(data, city);
      this.weatherData = data;
      if (this.cities.length === 0) {
        this.toastsManager.warning('', 'Ciry not found!', { toastLife: 3000 });
      }
    });
  }

  selectCity(id) {
    this.selectedCity = this.weatherData.query.results.channel[id];
  }

  getCorrectCities(data, city) {
    this.cities = new Array<City>();
    for (let i = 0; i < data.query.results.channel.length; i++) {
      let currentCityData = data.query.results.channel[i];
      let currentCityIndex = currentCityData.title.indexOf(city);
      if (currentCityIndex > -1) {
        let title = currentCityData.title.substring(currentCityIndex, currentCityData.title.length);
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
