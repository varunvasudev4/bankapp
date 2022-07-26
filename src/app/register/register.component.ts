import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accname=""
  accnum=""
  accpwrd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){

    var accname = this.accname
    var accnum = this.accnum
    var accpwrd = this.accpwrd

    const result = this.ds.register(accnum,accname,accpwrd)

    if(result){
      alert("Registered Successfully")
      this.router.navigateByUrl("")
    }else{
      alert("Already a user please log in")
      this.router.navigateByUrl("")
    }

  }
}
