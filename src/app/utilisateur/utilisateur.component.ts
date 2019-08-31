import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

declare var $;


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  Utilisateur = [];
  Userdata = {};
  fileToUpload: File = null;
  imageUrl: string = '/assets/img/img_lights.jpg';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
    this.apiService.getUser()
    .subscribe(
        res => this.Utilisateur = res,
        err  => console.log(err)
    );
  }

  onFileUpload(file: FileList) {
  const im: File =  this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
 }
   registreUser(data) {
    // console.log(data);
    this.apiService.ajoutUser(data, this.fileToUpload)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
 }
   }


