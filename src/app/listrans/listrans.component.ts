import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrans',
  templateUrl: './listrans.component.html',
  styleUrls: ['./listrans.component.scss']
})
export class ListransComponent implements OnInit {
  Transaction=[];
  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit() {
    this.apiService.getTransaction()
    .subscribe(
        res => this.Transaction = res,
        err  => console.log(err)
    );
  }

}
