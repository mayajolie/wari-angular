import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
declare var $;
@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  Partenaires = [];
  fileToUpload: File = null;
  imageUrl: string ='/assets/imge/img_lights.jpg';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
     this.apiService.getPartenaire()
        .subscribe(
         res=>this.Partenaires=res,
      err=> console.log(err)
      );
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
      res => console.log(res),
      err => console.log(err)
    )
 }
 bloquer(part){
 this.apiService.bloquerPart(part)
 .subscribe(
   res => console.log(res),
   err => console.log(err)
 )
}
transaction(data){
  this.apiService.transaction(data)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
 }
}

