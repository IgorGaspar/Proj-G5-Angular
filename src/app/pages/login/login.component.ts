import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public user:string = ""
  public password:string = ""
  public alertMessage:string = ""
  
  
  logar() {
    if(this.user == "admin@radarg3.com.br" && this.password == "radarg3"){
      localStorage.setItem("logged", "true")
      this.router.navigateByUrl("/home")
    }
    else{
      this.alertMessage = "Usuário ou senha inválidos."
      this.user = ""
      this.password = ""
    }
  }



  loggout(){
    localStorage.removeItem("logged")
    this.router.navigateByUrl("/login")
  }
}
