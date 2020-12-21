import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about.interface';

@Injectable({
  providedIn: 'root'
})
export class DataWebService {
  dataAbout: any;
  // private firebase: AngularFireDatabase

  constructor( private _http: HttpClient ) { }

  obtenerDatos(): About {
    this._http.get('https://editoriales-ibpr.firebaseio.com/about.json')
    .subscribe( res =>{
      this.dataAbout = res;
    })

    return this.dataAbout
  }
}
