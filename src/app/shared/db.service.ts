import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs'
@Injectable()
export class DbService {
  users: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.users = db.list('/users');
  }

  getAllUser(): FirebaseListObservable<any[]> {
    return this.users;
  }

  createUser(id: string) {
    this.users.push({ id: id, favorites: { 'Sofia': true } });
  }

  addCity(id: string, cityName: string) {
    let source = this.users.map(data => data.filter(u => {
      return u.id === id;
    })).subscribe(data => {
      let user = data[0];
      let $key = user.$key;
      let favorites = user.favorites;
      favorites[cityName] = true;
      this.users.update($key, { favorites });
      source.unsubscribe();
    });
  }

  removeCity(id: string, cityName: string) {
    let source = this.users.map(data => data.filter(u => {
      return u.id === id;
    })).subscribe(data => {
      let user = data[0];
      let $key = user.$key;
      let favorites = user.favorites;
      favorites[cityName] = false;
      this.users.update($key, { favorites })
      source.unsubscribe();
    });
  }

  getAllCities(id: string) {

    return Observable.create(observer => {
      this.users.map(data => data.filter(u => {
        return u.id === id;
      })).subscribe(data => {
        let user = data[0];
        let cities = Object.keys(user.favorites).filter(key => user.favorites[key]);
        observer.next(cities);
      });
    });
  }

}
