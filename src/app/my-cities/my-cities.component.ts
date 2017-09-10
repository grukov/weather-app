import { DbService } from '../shared/db.service';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { WeatherService } from '../shared/weather-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ForecastComponent } from '../weather-details/forecast/forecast.component'
import { WeatherComponent } from '../weather-details/weather/weather.component'
import { City } from './../../models/city.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-cities',
  templateUrl: './my-cities.component.html',
  styleUrls: ['./my-cities.component.css'],
})

export class MyCitiesComponent implements OnInit {
  cities;

  constructor(private route: ActivatedRoute, private db: DbService) { }
  ngOnInit(): void {

    this.cities = this.route.snapshot.data['cities'];
  }

}
