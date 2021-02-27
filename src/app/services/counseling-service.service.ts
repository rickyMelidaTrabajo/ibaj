import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CounselingServiceService {

  constructor(private firestore: AngularFirestore) { }

  getconsejos() {
    return this.firestore.collection('consejos').snapshotChanges();
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
    return this.firestore.collection('consejos').doc(idArticle).set({
      comentarios
    }, {merge: true});
  }
}
