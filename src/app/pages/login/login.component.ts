import { LoginStatusService } from "./../../services/login-status.service";

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  constructor(
    private router: Router,
    private loginStatusService: LoginStatusService
  ) {}

  ngOnInit(): void {}

  public email: string = "";
  public password: string = "";
  public alertMessage: string = "";
  public user = { email: "", password: "" };

  public login() {
    if (
      this.user.email == "admin@radarg3.com.br" &&
      this.user.password == "Radar@g3"
    ) {
      localStorage.setItem("logged", "true");
      this.router.navigateByUrl("/home");
    } else if (
      this.loginStatusService
        .login(this.user)
        .pipe(take(1))
        .subscribe((data) => {
          let token = data.token;
          localStorage.setItem("token", token);
        })
    ) {
      this.router.navigateByUrl("/home");
    } else {
      this.alertMessage = "Usuário ou senha inválidos.";
      this.user.email = "";
      this.user.password = "";
    }
  }

  //criação do login, utilizando localStorage que deixa o usuário logado até que ele seja removido
  // logar() {
  //   if (
  //     this.user.email == "admin@radarg3.com.br" &&
  //     this.user.password == "Radar@g3"
  //   ) {
  //     localStorage.setItem("logged", "true");
  //     this.router.navigateByUrl("/home");
  //   } else {
  //     this.alertMessage = "Usuário ou senha inválidos.";
  //     this.user.email = "";
  //     this.user.password = "";
  //   }
  // }

  loggout() {
    localStorage.removeItem("logged");
    this.router.navigateByUrl("/login");
  }
}
