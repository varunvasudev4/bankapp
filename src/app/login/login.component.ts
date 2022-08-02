import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // accnum = ""
  // accpwrd = ""


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  lform = this.fb.group({
    accnum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    accpwrd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  ngOnInit(): void {
  }

  login(){
    var acno = this.lform.value.accnum
    var pwrd = this.lform.value.accpwrd
    if(this.lform.valid){
      const result = this.ds.login(acno,pwrd)
    if(result){
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }else{
      alert("Incorrect Username or Password")
    }
  }else{
    alert("Invalid Form")
  }
  }
}
