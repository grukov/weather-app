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

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherData("Sofia").subscribe(data => {
      this.data = data;

      console.log(this.data);
  });
}
}