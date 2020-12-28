import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about.interface';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataWebService {
  dataAbout: any;
  dataConsejos: any;
  dataBlog: any;

  constructor(private _http: HttpClient, private firestore: AngularFirestore) { }

  obtenerDatos(): About {
    this._http.get('https://editoriales-ibpr.firebaseio.com/about.json')
      .subscribe(res => {
        this.dataAbout = res;
      })

    return this.dataAbout
  }

  consejos(): any {
    this._http.get('https://editoriales-ibpr.firebaseio.com/consejos.json')
      .subscribe(res => {
        this.dataConsejos = res;
      })

    return this.dataConsejos;
  }

  blog(): any {
    this._http.get('https://editoriales-ibpr.firebaseio.com/blog.json')
      .subscribe(res => {
        this.dataBlog = res;
      })
    return this.dataBlog;
  }

  getData() {
    return this.firestore.collection('data').snapshotChanges();
  }

  getArticles() {
    return this.firestore.collection('articles').snapshotChanges();
  }

  addPrayer(orderPrayer: any) {
    return this.firestore.collection('data').add(orderPrayer);
  }
}
