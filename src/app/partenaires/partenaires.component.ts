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
}

