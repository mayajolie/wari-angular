import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService:AuthentificationService) { }

  ngOnInit() {
  }
  title = 'kanuni-transfert';

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
    return this.isAuthentificed() ;
  }
}
