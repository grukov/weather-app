import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { WeatherService } from '../shared/weather-service.service';
import { LocationService } from 'app/shared/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  image: string;

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

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
}
