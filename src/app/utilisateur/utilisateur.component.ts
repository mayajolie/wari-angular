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
  imageUrl: string = '/assets/img/avatar.png';
  constructor(private apiService: ApiService,
              private router:Router) { }

  ngOnInit() {
 
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

}

