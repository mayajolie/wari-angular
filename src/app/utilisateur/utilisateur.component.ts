import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $;


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  
  Userdata = {};
  fileToUpload: File = null;
  imageUrl: string = '/assets/img/maya.jpg';
  constructor(private apiService: ApiService,
              private router:Router) { }

  ngOnInit() {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
   
  }

  onFileUpload(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
 }
   registreUser(data) {
    // console.log(data);
    this.apiService.ajoutUser(data, this.fileToUpload)
    .subscribe(
      res => {
        this.router.navigateByUrl("/listeUser")  
        console.log(res)

      },
      err => console.log(err)
    )
 }
 bloquerUser(user){
  console.log(user);
 this.apiService.bloquerUsers(user)
 .subscribe(
   res =>
   {
    console.log(res)
    this.ngOnInit()
   } ,
   err => console.log(err)
 )
}
editUser(user): void {
  this.apiService.modifUsers(user)
  .subscribe(
    res => console.log(res),
    err => console.log(err))
   }
   ajoututi(){
      document.getElementById('uti').style.display="block";
      document.getElementById('list').style.display="none"; 
  }
  listuser(){
    document.getElementById('uti').style.display="none";
    document.getElementById('list').style.display="block"; 
  }
}

