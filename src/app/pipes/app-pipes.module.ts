import { TimePipe } from './time.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { TrimCityNamePipe } from './trim-city-name.pipe';
import { NgModule } from '@angular/core'

@NgModule({
    declarations: [
        TrimCityNamePipe,
        TemperaturePipe,
        TimePipe
    ],
    exports: [
        TrimCityNamePipe,
        TemperaturePipe,
        TimePipe
    ]
})
export class AppPipesModule { }