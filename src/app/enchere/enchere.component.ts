import { Component, OnInit } from "@angular/core";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Produitservice } from "../services/produit.service";
import { Produit } from "../classes/produit";
import { AuthService } from "../services/auth.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "../services/user.service";
@Component({
  selector: "app-enchere",
  templateUrl: "./enchere.component.html",
  styleUrls: ["./enchere.component.css"],
})
export class EnchereComponent implements OnInit {
  produits: any;
  produit: Produit;
  s = 0;
  cuser: any;
  profile: any;
  users: any;
  clos: any;
  state: any;
  public search: any = "";
  p: number = 1;
  downloadURL: Observable<string>;
  selectedFile: File = null;
  fb = "";
  userData: any; // Save logged in user data
  cuse: any;
  selected: Produit;
  ss = false;

  constructor(
    public produitService: Produitservice,
    public auth: AuthService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth,
    public userService: UserService
  ) {}
  ngOnInit() {
    this.produit = new Produit();
    this.getUsers();
    this.getproduits();
    this.userdet();
    this.getclosproduits();
    this.cuser = localStorage.getItem("user");
  }

  userdet() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;

        //  console.log("my datas:", JSON.stringify(this.userData));
        this.cuse = this.userData;
        this.produit.acheteur = user.displayName;
        // localStorage.setItem("user", JSON.stringify(this.userData));
        //JSON.parse(localStorage.getItem("user"));
      } else {
        //localStorage.setItem("user", null);
        //JSON.parse(localStorage.getItem("user"));
        window.location.replace("login");
      }
    });
  }
  getUsers() {
    this.userService.read_User().subscribe((data) => {
      this.users = data.map((e) => {
        return {
          uid: e.payload.doc.id,

          email: e.payload.doc.data()["email"],
          photoURL: e.payload.doc.data()["photoURL"],
          displayName: e.payload.doc.data()["displayName"],
          emailVerified: e.payload.doc.data()["emailVerified"],
          phoneNumber: e.payload.doc.data()["phoneNumber"],
          adresse: e.payload.doc.data()["adresse"],
          bio: e.payload.doc.data()["bio"],
        };
      });
      // console.log(this.users);
      for (let u of this.users) {
        if (this.cuser === u.uid) {
          /* localStorage.setItem("profile", JSON.stringify(u));
          this.profile = JSON.parse(localStorage.getItem("profile"));*/
          this.profile = u;
          // console.log(this.profile);
        }
      }
    });
  }
  select(p) {
    this.produit = p;
  }
  getproduits() {
    this.produitService.read_mesencheres().subscribe((data) => {
      this.produits = data.map((e) => {
        return {
          id: e.payload.doc.id,

          // tslint:disable-next-line: no-string-literal
          titre: e.payload.doc.data()["titre"],
          // tslint:disable-next-line: no-string-literal

          // tslint:disable-next-line: prix-string-literal
          prix: e.payload.doc.data()["prix"],
          prixact: e.payload.doc.data()["prixact"],
          acheteur: e.payload.doc.data()["acheteur"],

          // tslint:disable-next-line: no-string-literal
          description: e.payload.doc.data()["description"],
          etat: e.payload.doc.data()["etat"],

          // tslint:disable-next-line: no-string-literal
          photo: e.payload.doc.data()["photo"],
          dt: e.payload.doc.data()["dt"],
          // tslint:disable-next-line: no-string-literal
        };
      });
      console.log(this.produits);
    });
  }
  getclosproduits() {
    this.produitService.read_closencheres().subscribe((data) => {
      this.clos = data.map((e) => {
        return {
          id: e.payload.doc.id,

          // tslint:disable-next-line: no-string-literal
          titre: e.payload.doc.data()["titre"],
          // tslint:disable-next-line: no-string-literal

          // tslint:disable-next-line: prix-string-literal
          prix: e.payload.doc.data()["prix"],
          prixact: e.payload.doc.data()["prixact"],
          acheteur: e.payload.doc.data()["acheteur"],

          // tslint:disable-next-line: no-string-literal
          description: e.payload.doc.data()["description"],
          etat: e.payload.doc.data()["etat"],

          // tslint:disable-next-line: no-string-literal
          photo: e.payload.doc.data()["photo"],
          dt: e.payload.doc.data()["dt"],
          // tslint:disable-next-line: no-string-literal
        };
      });
      console.log(this.clos);
    });
  }
  bid() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;

        //  console.log("my datas:", JSON.stringify(this.userData));
        this.cuse = this.userData;
        this.produit.acheteur = this.profile.displayName;

        this.produit.id_act = this.cuse.uid;
        let p = Object.assign({}, this.produit);
        this.produitService.update_Produit(this.produit.id, p);
        // localStorage.setItem("user", JSON.stringify(this.userData));
        //JSON.parse(localStorage.getItem("user"));
      } else {
        alert("vous devez vous connecter");
        window.location.replace("login");
      }
    });
  }
}
