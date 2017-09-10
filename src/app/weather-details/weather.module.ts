import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        WeatherComponent,
        ForecastComponent
    ],
    exports: [
        WeatherComponent,
        ForecastComponent
    ]
})
export class WeatherModule { }
