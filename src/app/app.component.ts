import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService:AuthentificationService, private router:Router,) { }

  ngOnInit() {
    this.router.navigateByUrl("/login")  
  }
  title = 'YOMBAL-transfert';

  isAdminSystem(){
    return this.authService.isAdminSystem();
  }
  isUser(){
    return this.authService.isUser();
  }
  isAdminPart(){
    return this.authService.isAdminPart();
  }
  isCaisier(){
    return this.authService.isCaisier();
  }
  isAuthentificed(){
    return this.authService.isAuthentificed() ;
  }
  logout(){
    this.authService.logout();
  }
}
