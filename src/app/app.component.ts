import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radar_G3';
  
  constructor(private router:Router) { }

  logged = localStorage.length
  
  loggout(){
    localStorage.removeItem("logged")
    this.router.navigateByUrl("/login")
  }
}

