import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class Produitservice {
  id: string;
  constructor(private firestore: AngularFirestore) {}

  create_NewProduit(record) {
    return this.firestore.collection("Produits").add(record);
  }

  read_Produits() {
    return this.firestore
      .collection("Produits", (ref) => ref.where("etat", "==", "en cours"))
      .snapshotChanges();
  }
  read_mesProduits() {
    return this.firestore
      .collection("Produits", (ref) =>
        ref.where("id_vd", "==", localStorage.getItem("user"))
      )
      .snapshotChanges();
  }
  read_mesencheres() {
    return this.firestore
      .collection("Produits", (ref) =>
        ref.where("id_act", "==", localStorage.getItem("user"))
      )
      .snapshotChanges();
  }
  read_closencheres() {
    return this.firestore
      .collection("Produits", (ref) => ref.where("etat", "==", "désactiver"))
      .snapshotChanges();
  }
  update_Produit(recordID, record) {
    this.firestore.doc("Produits/" + recordID).update(record);
    console.log("updated");
  }

  delete_Produit(record_id) {
    this.firestore.doc("Produits/" + record_id).delete();
  }
}
