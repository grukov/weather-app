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


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
        ToastModule.forRoot()
    ],
    providers: [AuthService, WeatherService, LocationService],
    bootstrap: [AppComponent]
})

export class AppModule {
}