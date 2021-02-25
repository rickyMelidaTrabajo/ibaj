import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageServiceService {

  constructor( private storage: AngularFireStorage ) { }

  getActivities() {
    return this.storage.ref('gs://editoriales-ibpr.appspot.com/activities/act_1.jpg');
  }
}
