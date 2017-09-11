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

        return Observable.create(observer => {
            this.authService.currentUser().subscribe(u => {
                this.db.getAllCities(u.uid).subscribe(names => {
                    if (names.length > 0) {
                        this.weatherService.getWeatherDataCities(names).subscribe(data => {
                            if (!data.length) {
                                let result = [];
                                result.push(data);
                                data = result;
                            }
                            observer.next(data);
                        })
                    } else {
                        observer.next([]);
                    }
                })
            })
        }).first();
    }

}
