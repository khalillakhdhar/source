import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EnchereService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewEnchere(record) {
    return this.firestore.collection('Encheres').add(record);
  }

  read_Encheres() {
    return this.firestore.collection('Encheres').snapshotChanges();
  }

  update_Enchere(recordID, record) {
    this.firestore.doc('Encheres/' + recordID).update(record);
    console.log('updated');
  }

  delete_Enchere(record_id) {
    this.firestore.doc('Encheres/' + record_id).delete();
  }
}