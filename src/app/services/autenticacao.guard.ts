import { environment } from 'src/environments/environment';
import { LoginStatusService } from "src/app/services/login-status.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AutenticacaoGuard implements CanActivate {
  constructor(
    private loginStatusService: LoginStatusService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.loginStatusService.logged != null
    ) {
      console.log("tá logado");
      return true;
    }

    this.router.navigateByUrl("/login");    
    return false;
  }
}
