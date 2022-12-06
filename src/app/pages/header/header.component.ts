import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/app/services/login-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
    public loginStatusService:LoginStatusService) { }

  ngOnInit(): void {
  }

 

  logged = localStorage.length
  
  loggout(){
    localStorage.removeItem("logged")
    this.router.navigateByUrl("/login")
  }

}
