import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // tslint:disable-next-line: variable-name
 private _userUrl = 'http://localhost:8000/api/listeUser/11';
 private _blokuser = 'http://localhost:8000/api/bloqueDebloqueUser/';
 private _modifuser = 'http://localhost:8000/api/modif/';
 private _blokpart = 'http://localhost:8000/api/bloqueDebloquePart/';




 // tslint:disable-next-line: variable-name
 private _partenaireUrl = 'http://localhost:8000/api/listPart/3';
 private _depotUrl = 'http://localhost:8000/api/depot';
 private _comptUrl = 'http://localhost:8000/api/comptB';



 constructor(private http: HttpClient) { }

 getUser() {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  console.log(headers)
  return this.http.get<any>(this._userUrl,{headers:headers});
 }

 getPartenaire():Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
   return this.http.get<any>(this._partenaireUrl, {headers:headers});
 }
 ajoutUser(User,FileUpload):Observable<any> {
  
 const header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
 const ajout ='http://localhost:8000/api/new'
 const formData: FormData = new FormData();
 formData.append('nom', User.nom);
 formData.append('prenom', User.prenom);
 formData.append('adresse', User.adresse);
 formData.append('email', User.email);
 formData.append('telephone', User.telephone);
 formData.append('plainPassword', User.plainPassword);
 formData.append('profil', User.profil);
 formData.append('imageName', FileUpload , FileUpload.name); 
 formData.append('username', User.username);
 console.log(formData)
 return this.http.post(ajout, formData, {headers: header});
}
fairedepot(depot): Observable<any> {
  var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  return this.http.post<any>(this._depotUrl, depot , { headers : headers});
 }
 comptebancaire(compt): Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  return this.http.post<any>(this._comptUrl, compt , { headers : headers});
 }
 ajoutPart(User,FileUpload):Observable<any> {
  
  const header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  const ajout ='http://localhost:8000/api/admin'
  const formData: FormData = new FormData();
  formData.append('nom', User.nom);
  formData.append('prenom', User.prenom);
  formData.append('adresse', User.adresse);
  formData.append('email', User.email);
  formData.append('telephone', User.telephone);
  formData.append('plainPassword', User.plainPassword);
  formData.append('imageName', FileUpload , FileUpload.name); 
  formData.append('username', User.username);
  formData.append('ninea', User.ninea);
  formData.append('raisonSocial', User.raisonSocial);
  formData.append('adres', User.adres);
  formData.append('tel', User.tel);



  console.log(formData)
  return this.http.post(ajout, formData, {headers: header});
 }
 bloquerUsers(id): Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  console.log(headers)
  return this.http.get<any>(this._blokuser+id, {headers:headers});
 }
 modifUsers(id): Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  console.log(headers)
  return this.http.get<any>(this._modifuser+id,  {headers:headers});
 }
 bloquerPart(id): Observable<any> {
  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  console.log(headers)
  return this.http.get<any>(this._blokpart+id, {headers:headers});
 }
}