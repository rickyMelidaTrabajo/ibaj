import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrayerServiceService {

  constructor(private firestore: AngularFirestore) { }

  addPrayer(orderPrayer: any, id: any) {
    return this.firestore.collection('peticiones-oracion').doc(id.toString()).set({orderPrayer});
  }

  getPrayer() {
    return this.firestore.collection('peticiones-oracion').snapshotChanges();
  }
}
