import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataWebService {
  dataAbout: any;
  dataConsejos: any;
  dataBlog: any;

  constructor(private firestore: AngularFirestore) { }



  getconsejos() {
    return this.firestore.collection('consejos').snapshotChanges();
  }

  getData() {
    return this.firestore.collection('data').snapshotChanges();
  }

  getNosotros() {
    return this.firestore.collection('nosotros').snapshotChanges();
  }

  getObjetivos() {
    return this.firestore.collection('objetivos').snapshotChanges();
  }

  getCreencias() {
    return this.firestore.collection('creencias').snapshotChanges();
  }

  getConfesionFe() {
    return this.firestore.collection('declaracionDeFe').snapshotChanges();
  }

  getServicios() {
    return this.firestore.collection('servicios').snapshotChanges();
  }


}
