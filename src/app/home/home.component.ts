import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { WeatherService } from '../shared/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  image: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherData("Las Vegas").subscribe(data => {
      this.data = data;

      console.log(this.data);
      var channels = this.data.query.results.channel;
      this.image = channels[1].image.url;
  });
}
}