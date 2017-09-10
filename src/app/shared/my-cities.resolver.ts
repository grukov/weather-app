import { WeatherService } from './weather-service.service';
import { AuthService } from 'app/shared/auth.service';
import { DbService } from './db.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class MyCitiesResolver implements Resolve<any> {
    constructor(private db: DbService, private authService: AuthService, private weatherService: WeatherService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any> | Promise<any> {

        return this.authService.currentUser().toPromise().then(u => {
            return this.db.getAllCities(u.uid).toPromise().then(names => {

                if (names.length > 0) {
                    return this.weatherService.getWeatherDataCities(names).map(data => {
                        if (!data.length) {
                            let result = [];
                            result.push(data);
                            return result;
                        } else {
                            return data;
                        }
                    }).toPromise();
                } else {
                    return Promise.resolve([]);
                }
            })
        });
    }

}
