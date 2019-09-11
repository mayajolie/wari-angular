import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt:string ;
  roles:Array<string>;
  username:string;
  private host="http://localhost:8000/api";



  constructor(private http:HttpClient,) { }
  login(data){
    return this.http.post("http://localhost:8000/api/login",data,{observe:'response'})
  }

  aplitoken(jwt:any){
    localStorage.setItem("token",jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();
  }
  parseJWT(){
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.username;
    this.roles=objJWT.roles;
    console.log(this.roles);
    console.log(this.username);

  }
  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT(); 
  }
  isAdminSystem(){
    return this.roles.indexOf("ROLE_SUPER_ADMIN")>=0;
  }
  isAdminPart(){
    return this.roles.indexOf("ROLE_ADMIN")>=0;
  }
  isUser(){
    return this.roles.indexOf("ROLE_USER")>=0;
  }
  isCaisier(){
    return this.roles.indexOf("ROLE_CAISIER")>=0;
  }
  isAuthentificed(){
    return this.roles && (this.isAdminSystem() ||this.isUser()||this.isAdminPart()||this.isCaisier()) ;
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}

