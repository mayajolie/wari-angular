import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-liste-part',
  templateUrl: './liste-part.component.html',
  styleUrls: ['./liste-part.component.scss']
})
export class ListePartComponent implements OnInit {
  Partenaires = [];

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPartenaire()
    .subscribe(
     res=>this.Partenaires=res,
  err=> console.log(err)
  );
  }
  bloquer(part){
    this.apiService.bloquerPart(part)
    .subscribe( 
      res =>{
       console.log(res)
       this.ngOnInit()
      } ,
      err => console.log(err)
    )
   }
}
