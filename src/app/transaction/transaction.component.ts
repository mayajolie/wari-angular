import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  Transaction = [];
  typeretrait :any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTransaction()
    .subscribe(
        res => this.Transaction = res,
        err  => console.log(err)
    );
  }
 
  transaction(data) {
     console.log(data);
    this.apiService.transaction(data)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
 }
 trans(data) {
  // console.log(data);
  this.apiService.trans(data)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
}
choix1(){
  document.getElementById('NumeroCINBeneficier').style.display="none";
  document.getElementById('coderetrait').style.display="none";
  document.getElementById('nomEnvo').style.display="block";
  document.getElementById('prenomE').style.display="block";
  document.getElementById('telephoneE').style.display="block";
  document.getElementById('numE').style.display="block";
  document.getElementById('nomB').style.display="block";
  document.getElementById('prenomB').style.display="block";
  document.getElementById('telephoneB').style.display="block";
  document.getElementById('montant').style.display="block";
}
choix2(){
  document.getElementById('NumeroCINBeneficier').style.display="block";
  document.getElementById('coderetrait').style.display="block";
  document.getElementById('nomEnvo').style.display="none";
  document.getElementById('prenomE').style.display="none";
  document.getElementById('telephoneE').style.display="none";
  document.getElementById('numE').style.display="none";
  document.getElementById('nomB').style.display="none";
  document.getElementById('prenomB').style.display="none";
  document.getElementById('telephoneB').style.display="none";
  document.getElementById('montant').style.display="none";

}
transac(){
  document.getElementById('trans').style.display="block";
  document.getElementById('listrans').style.display="none";
}
listrans(){
  document.getElementById('trans').style.display="none";
  document.getElementById('listrans').style.display="block";
}
}
