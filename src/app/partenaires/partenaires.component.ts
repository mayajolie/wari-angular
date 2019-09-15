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
  imageUrl: string = '/assets/img/avatar.png';
  constructor(private apiService: ApiService, private router: Router) { }

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

}