import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // tslint:disable-next-line: variable-name
 private _userUrl = 'http://localhost:8000/api/users';
 private _user = 'http://localhost:8000/api/new';

 // tslint:disable-next-line: variable-name
 private _partenaireUrl = 'http://localhost:8000/api/partenaires';

 constructor(private http: HttpClient) { }

 getUser() {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
   return this.http.get<any>(this._userUrl,{headers:headers});
 }

 getPartenaire():Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
   return this.http.get<any>(this._partenaireUrl, {headers:headers});
 }
 ajoutUser(user):Observable<any>{
 const header= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
   return this.http.post<any>(this._user,user,{headers:header});
 }
}

