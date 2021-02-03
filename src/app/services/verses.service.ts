import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class VersesService {

  constructor(private firestore: AngularFirestore) { }

  getVersiculos() {
    return this.firestore.collection('versiculos').snapshotChanges();
  }
}
