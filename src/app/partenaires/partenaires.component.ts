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
     
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.Partenaires);
     this.apiService.getPartenaire()
        .subscribe(
         res=>this.Partenaires=res,
      err=> console.log(err)
      );
  }
}

