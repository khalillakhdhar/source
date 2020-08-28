import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../classes/user";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.SignOut();
    localStorage.clear();
  }
  login() {
    this.authService.SignIn(this.email, this.password);
    this.email = this.password = "";
  }
}
