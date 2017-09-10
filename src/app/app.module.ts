import { WeatherModule } from './weather-details/weather.module';
import { MyCitiesResolver } from './shared/my-cities.resolver';
import { DbService } from './shared/db.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { authConfig, firebaseConfig } from 'environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from 'app/shared/auth.service';
import { WeatherService } from 'app/shared/weather-service.service';
import { LocationService } from 'app/shared/location.service';
import { AlertModule } from 'ng2-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather-details/weather/weather.component';
import { ForecastComponent } from './weather-details/forecast/forecast.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TemperaturePipe,
        TimePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
        ToastModule.forRoot(),
        WeatherModule
    ],
    providers: [AuthService, WeatherService, LocationService, DbService, TimePipe, MyCitiesResolver],
    exports: [WeatherComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
