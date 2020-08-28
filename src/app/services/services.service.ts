import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private firestore: AngularFirestore) {}

  //collection firebase
  create_NewService(record) {
    return this.firestore
      .collection("users/" + localStorage.getItem("user") + "/services")
      .add(record);
  }
  read_Service() {
    return this.firestore.collection("Services").snapshotChanges();
  }
  read_myService() {
    return this.firestore
      .collection("users/" + localStorage.getItem("user") + "/services")
      .snapshotChanges();
  }
  //${user.uid}

  read_One(id) {
    return this.firestore
      .collection("users/" + localStorage.getItem("user") + "/services")
      .doc(id).snapshotChanges;
  }
  update_Service(recordID, record) {
    this.firestore
      .doc("users/" + localStorage.getItem("user") + "/services/" + recordID)
      .update(record);
    console.log("updated");
  }
  delete_Service(record_id) {
    this.firestore
      .doc("users/" + localStorage.getItem("user") + "/services" + record_id)
      .delete();
  }
}
