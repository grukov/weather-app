import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {

  }

  getWeatherData(city: string): Observable<any> {
    const searchtext = `select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text='${city}')&format=json`
    return this.http.get('http://query.yahooapis.com/v1/public/yql?q=' + searchtext)
      .map((res: Response) => res.json());
  }
}
