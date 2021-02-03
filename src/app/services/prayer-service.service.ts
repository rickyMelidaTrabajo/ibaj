import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrayerServiceService {

  constructor(private firestore: AngularFirestore) { }

  addPrayer(orderPrayer: any) {
    return this.firestore.collection('peticiones-oracion').add(orderPrayer);
  }
}
