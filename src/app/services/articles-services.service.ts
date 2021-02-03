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

  addComment(comment: any) {
    // let datos: any = {
    //   dato1: 'dato9',
    //   dato2: 'dato8',
    //   dato3: [
    //     {
    //       datoArray1: 'datoArray6',
    //       datoArray2: 'datoArray5'
    //     },
    //     {
    //       datoArray1: 'datoArray6',
    //       datoArray2: 'datoArray5'
    //     },
    //     {
    //       datoArray1: 'datoArray6',
    //       datoArray2: 'datoArray5'
    //     },
    //     {
    //       datoArray1: 'datoArray6',
    //       datoArray2: 'datoArray5'
    //     },
    //   ]
    // };
    let datos: Array<any> = new Array();
    datos.push({
      atoArrayM: 'datoArrayM',
      datoArrayM: 'datoArrayM'
    });
    return this.firestore.doc('data/1').set(datos);
  }

  getComment() {
    return this.firestore.collection('comentarios').snapshotChanges();
  }

}
