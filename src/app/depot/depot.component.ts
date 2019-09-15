import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  compt:any =  [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  depot(data) {
    this.apiService.fairedepot(data)
    .subscribe(
      compt => {
        this.compt=compt;
        console.log(this.compt)},
      err => {
        console.log(err)
        Swal.fire(err.error.message)
      
    }
    )
 }
 infopart(data){
   console.log(data);
   //res=this.compt;
  this.apiService.infopart(data)
  .subscribe(
    compt => {
      this.compt=compt;
      console.log(this.compt)},

    err => console.log(err)
  )
  }
//  this.contentfulService.weekNumber
// .subscribe(
// weekNumber => {
// this.weekNumber = weekNumber;
// console.log(this.weekNumber); }, error => { console.log(error); });
}
