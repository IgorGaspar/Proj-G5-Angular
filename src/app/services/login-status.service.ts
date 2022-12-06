import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor(private router:Router) { 
    this.loginStatus()
  }

  //inicia como não logado (false)
  public logged:boolean = false



  public loginStatus():boolean {
    this.logged = localStorage.getItem("logged") ? true : false
    return this.logged
  }

  // Para deslogar
  public logout(){
    localStorage.removeItem("logged")
    this.logged = false
    this.router.navigateByUrl("/login")
  }


  //Se não estiver logado, o usuário é redirecionado para a tela de login
  public redirectNãoLogado():boolean {
    if (!this.loginStatus()){
      this.router.navigateByUrl("/login")
      return true
    }
    return false
  }
}
