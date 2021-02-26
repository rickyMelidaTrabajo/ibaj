import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageServiceService {

  constructor( private firestore: AngularFirestore ) { }

  getImagesPortada() {
    return this.firestore.collection('images-portada').snapshotChanges();
  }


}
