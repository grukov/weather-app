import { WeatherService } from './weather-service.service';
import { AuthService } from 'app/shared/auth.service';
import { DbService } from './db.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class MyCitiesResolver implements Resolve<any[]> {
    constructor(private db: DbService, private authService: AuthService, private weatherService: WeatherService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {

        return this.db.getAllCities('h3hesD8QdqTciCpKOmqSqKA1Kfx1').toPromise().then(names => {
            return this.weatherService.getWeatherDataCities(names).toPromise();
        })
    }

}
