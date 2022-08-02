import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uname = ""
  acc1 = ""
  accbal = ""
  //accamt = ""
  // accto = ""
  // toamt = ""
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {
    this.uname = this.ds.accounts[this.ds.cuser]['accname']
    this.acc1 = this.ds.cuser
  }

  ftform = this.fb.group({
    accto: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    toamt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  dform = this.fb.group({
    accamt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  ngOnInit(): void {
    if(!localStorage.getItem('cuser')){
      this.router.navigateByUrl('')
    }
  }
  logout() {
    localStorage.removeItem('cuser')
    this.router.navigateByUrl("")
  }
  balchk() {
    this.accbal = `Balance ${this.ds.accounts[this.ds.cuser]['accbal']}`
  }
  deposit() {
    var result = this.ds.deposit(this.dform.value.accamt)
    if (result) {
      alert(`${this.dform.value.accamt} Deposited successfully`)
    }
  }
  fundtrans() {
    if(this.ftform.valid){
      let result = this.ds.fundtran(this.ftform.value.accto, this.ftform.value.toamt)
      if (result) {
        alert("Fund Transfer Completed")
      } else {
        alert("Insuffician Balance")
      }
    }else{
      alert("Invalid Form")
    }
  }

  trans: any
  showstmt() {
    this.trans = this.ds.getTrans()
    //console.log(this.trans);

  }
}
