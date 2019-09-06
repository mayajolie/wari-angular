import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthentificationService,
              private router:Router,
              private route:ActivatedRoute) { }
  
  ngOnInit() {
  }
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
  onLogin(data: any){
    this.authService.login(data)
    .subscribe(resp=>{
      let jwt:any = resp.body;
      this.authService.aplitoken(jwt);
      if (this.isAdminSystem()) {
        this.router.navigateByUrl("/partenaire")  
      }
      if (this.isAdminPart()) {
        this.router.navigateByUrl("/utilisateur")  
      }
      if (this.isCaisier()) {
        this.router.navigateByUrl("/depot")  
      }
      if (this.isUser()) {
        this.router.navigateByUrl("/transaction")  
      }
      console.log(resp);

    },
    err=>console.log(err),

    )
    
  }

 
}
