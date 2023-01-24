import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor(
    private router: Router,
    private http: HttpClient) { 
    this.loginStatus()
  }

  //inicia como não logado (false)
  public logged:boolean = false

  login(user : any) : Observable<any>{
    this.logged = true;
    return this.http.post(`${environment.api}/autoriza/login`, {
      email: user.email,
      password: user.password
    })
  }


  public loginStatus():boolean {
    this.logged = localStorage.getItem("token") ? true : false
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
