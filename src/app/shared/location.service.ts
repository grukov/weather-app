import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LocationService {

  constructor(private http: Http) {

   }
  
  getLocation(): Observable<any>{
    return this.http.get("http://ipinfo.io")
          .map((res: Response) => res.json());
    }
}

