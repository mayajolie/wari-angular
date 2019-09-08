import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  Utilisateur = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getUser()
    .subscribe(
        res => this.Utilisateur = res,
        err  => console.log(err)
    );
    
  }

}
