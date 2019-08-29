import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
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
  
  imageUrl:string="/assets/img/img_lights.jpg"
  fichiertele:File=null;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
   this.apiService.getUser()
      .subscribe(
       res=>this.Utilisateur=res,
    err=> console.log(err)
    );
  }
//   handleFileInput(file:FileList){
//     this.fichiertele=file.item(0);

//     var reader=new FileReader();
//     reader.onload=(event:any)=>{
//       this.imageUrl = event.target.files;
//     }
//     reader.readAsDataURL(this.fichiertele);
//  }
  // ajout(user){
  //   this.apiService.ajoutUser(user)
  //     .subscribe(
  //      res=>this.Utilisateur=res,
  //  err=> console.log(err)
  //    );

  //  }
   registreUser(user:any){
    this.apiService.ajoutUser(user)
    .subscribe(
      res=>console.log(res),
      err=> console.log(err)
   )
 }
    
   }


