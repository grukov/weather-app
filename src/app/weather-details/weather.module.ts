import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { TimePipe } from './../pipes/time.pipe';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WeatherComponent,
        ForecastComponent,
        TimePipe,
        TemperaturePipe,
    ],
    exports: [
        WeatherComponent,
        ForecastComponent
    ]
})
export class WeatherModule { }
