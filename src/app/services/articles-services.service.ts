import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServicesService {

  constructor(private firestore: AngularFirestore) { }

  getArticles() {
    return this.firestore.collection('articles').snapshotChanges();
  }

  addComment(comentarios: Array<any>, idArticle: any) {
    let datos: Array<any> = new Array();
    datos.push(
      {
      atoArrayM: 'datoArrayM1',
      datoArrayM: 'datoArrayM1'
    },
    {
      atoArrayM: 'datoArrayM2',
      datoArrayM: 'datoArrayM2'
    },
    {
      atoArrayM: 'datoArrayM3',
      datoArrayM: 'datoArrayM3'
    },
    {
      atoArrayM: 'datoArrayM4',
      datoArrayM: 'datoArrayM4'
    },
    );
    return this.firestore.collection('articles').doc(idArticle).set({
      comentarios
    }, {merge: true});

  }

  getComment() {
    return this.firestore.collection('comentarios').snapshotChanges();
  }

}
