import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {authConfig, firebaseConfig} from "environments/firebaseConfig";
import {AngularFireModule} from "angularfire2";
import {AuthService} from "app/shared/auth.service";
import { WeatherService } from 'app/shared/weather-service.service';
import { LocationService } from 'app/shared/location.service';
import {LoginUserComponent} from "app/login-user/login-user.component";
import {DisplayUserComponent} from "app/display-user/display-user.component";
import {RegisterUserComponent} from "app/register-user/register-user.component";
import {AlertModule} from "ng2-bootstrap";
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MyCitiesComponent } from './my-cities/my-cities.component';
import { ForecastDirective } from './forecast.directive';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginUserComponent },
    { path: 'register',      component: RegisterUserComponent },
    { path: 'user-details', component: DisplayUserComponent, canActivate: [ AuthService ]},
    { path: 'forgot-password', component: ResetPasswordComponent},
    { path: 'home', component: HomeComponent},
    { path: 'my-cities', component: MyCitiesComponent}
    //{ path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    declarations: [
        AppComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        HomeComponent,
        MyCitiesComponent,
        ForecastDirective,
        ForecastComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
        RouterModule.forRoot(appRoutes),
        ToastModule.forRoot()
    ],
    providers: [AuthService, WeatherService, LocationService],
    bootstrap: [AppComponent]
})

export class AppModule {
}