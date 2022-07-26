import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accnum = ""
  accpwrd = ""


  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var acno = this.accnum
    var pwrd = this.accpwrd
    const result = this.ds.login(acno,pwrd)
    if(result){
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }else{
      alert("Incorrect Username or Password")
    }
  }
}
