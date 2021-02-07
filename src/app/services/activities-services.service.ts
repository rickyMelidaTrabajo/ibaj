import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesServicesService {

  constructor(private firestore: AngularFirestore) { }

  getActivities() {
    return this.firestore.collection('activities').snapshotChanges();
  }
}
