import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  Utilisateur = [];
  listCompt:any;
data

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.apiService.getCompt()
    .subscribe(
        res => this.listCompt = res,
        err  => console.log(err)
    );

    this.apiService.getUser()
    .subscribe(
        res => this.Utilisateur = res,
        err  => console.log(err)
    );
    
  }
  bloquerUser(user){
    console.log(user);
   this.apiService.bloquerUsers(user)
   .subscribe(
     res =>
     {
      console.log(res)
      this.ngOnInit()
     } ,
     err => console.log(err)
   )
  }
   
editUser(id): void {
  this.data=id
  console.log(id)

 }
   

 aloucompte(compt){
   console.log(compt)
  console.log(this.data)
    this.apiService.modifUsers(compt,this.data)
    .subscribe(
      res => {
        console.log(res)
        Swal.fire(res.message)
        this.ngOnInit()
      },
      err => console.log(err)
    )
   }


}
