import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor(private router:Router) { 
    this.loginStatus()
  }

  public logged:boolean = false

  public loginStatus():boolean {
    this.logged = localStorage.getItem("logged") ? true : false
    return this.logged
  }

  public logout(){
    localStorage.removeItem("logged")
    this.logged = false
    this.router.navigateByUrl("/login")
  }

  public redirectNãoLogado():boolean {
    if (!this.loginStatus()){
      this.router.navigateByUrl("/login")
      return true
    }
    return false
  }
}
