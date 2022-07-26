import { Component, OnInit } from '@angular/core';
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
  accamt = ""
  accto = ""
  toamt = ""
  constructor(private router: Router, private ds: DataService) {
    this.uname = this.ds.accounts[this.ds.cuser]['accname']
    this.acc1 = this.ds.cuser
  }

  ngOnInit(): void {
  }
  logout() {
    this.router.navigateByUrl("")
  }
  balchk() {
    this.accbal = `Balance ${this.ds.accounts[this.ds.cuser]['accbal']}`
  }
  deposit() {
    var result = this.ds.deposit(this.accamt)
    if (result) {
      alert(`${this.accamt} Deposited successfully`)
    }
  }
  fundtrans() {
    let result = this.ds.fundtran(this.accto, this.toamt)
    if (result) {
      alert("Fund Transfer Completed")
    } else {
      alert("Insuffician Balance")
    }
  }

  trans:any
  showstmt(){
    this.trans=this.ds.getTrans()
    console.log(this.trans);
    
  }
}
