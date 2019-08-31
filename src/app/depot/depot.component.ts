import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  depot(data) {
     console.log(data);
    this.apiService.fairedepot(data)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
 }
}
