import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  fileToUpload: File = null;
  imageUrl: string ='/assets/img/avatar.png';
  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit() {
    
  }
  compte(data){
    this.apiService.comptebancaire(data)
    .subscribe(
     res => console.log(res),
     err => console.log(err)
  );
  }
  onFileUpload(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
 }
   registrePart(data) {
    // console.log(data);
    this.apiService.ajoutPart(data, this.fileToUpload)
    .subscribe(
      res => {
        this.router.navigateByUrl("/listPart")  
        console.log(res)

      },
      err => console.log(err)
    )
 }

// transaction(data){
//   this.apiService.transaction(data)
//   .subscribe(
//     res => console.log(res),
//     err => console.log(err)
//   )
//  }
 ajoutpart(){
  document.getElementById('ajoutpart').style.display="block";
  document.getElementById('afilist').style.display="none";
  document.getElementById('ajoutco').style.display="none";


 }
 ajoutco(){
  document.getElementById('ajoutpart').style.display="none";
  document.getElementById('afilist').style.display="none";
  document.getElementById('ajoutco').style.display="block";



 }
 ajout(){
  document.getElementById('ajout').style.display="block";

 }
 liste(){
  document.getElementById('liste').style.display="block";

 }
 listepart(){
  document.getElementById('afilist').style.display="block";
  document.getElementById('ajoutpart').style.display="none";
  document.getElementById('ajoutco').style.display="none";



 }
}

