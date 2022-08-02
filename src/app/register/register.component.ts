import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  // accname=""
  // accnum=""
  // accpwrd=""

  rform = this.fb.group({
    accname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accnum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    accpwrd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  ngOnInit(): void {
  }
  register() {


    // var accname = this.accname
    // var accnum = this.accnum
    // var accpwrd = this.accpwrd

    var accname = this.rform.value.accname
    var accnum = this.rform.value.accnum
    var accpwrd = this.rform.value.accpwrd


    if (this.rform.valid) {
      const result = this.ds.register(accnum, accname, accpwrd)

      if (result) {
        alert("Registered Successfully")
        this.router.navigateByUrl("")
      } else {
        alert("Already a user please log in")
        this.router.navigateByUrl("")
      }
    } else {
      alert("Invalid Form")
    }

  }
}
