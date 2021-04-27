import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CounselingServiceService {

  constructor(private firestore: AngularFirestore) { }

  getCounseling() {
    return this.firestore.collection('consejos').snapshotChanges();
  }

  addComment(comment: any, id: any) {
    return this.firestore.collection('comentarios-consejos').doc(id.toString()).set({ comment }, { merge: true });
  }

  getComment() {
    return this.firestore.collection('comentarios-consejos').snapshotChanges();
  }
}
