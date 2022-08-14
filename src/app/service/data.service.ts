import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cuser = ""
  //database
  accounts: any = {
    1000: { accno: 1000, accname: "Max", accpwrd: 1000, accbal: 5000,transaction:[] },
    1001: { accno: 1001, accname: "Maxwell", accpwrd: 1001, accbal: 6000,transaction:[] },
    1002: { accno: 1002, accname: "Alan", accpwrd: 1002, accbal: 4000,transaction:[] }

  }

  constructor() { 
    this.getData()
  }

  login(accno: any, accpwrd: any) {
    var accs = this.accounts
    if (accno in accs) {
      if (accpwrd == accs[accno]['accpwrd']) {
        this.cuser = accno
        this.saveData()
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }


  register(accno: any, accname: any, accpwrd: any) {
    var acc = this.accounts
    if (accno in acc) {
      return false
    } else {
      acc[accno] = {
        accno,
        accname,
        accpwrd,
        accbal: 2000,
        transaction: []
      }
      this.saveData()
      return true
    }

  }

  deposit(accamt: any) {
    var acc = this.accounts
    var acno = this.cuser
    acc[acno]['accbal'] += Number(accamt)
    acc[acno]['transaction'].push({
      type: "CREDIT",
      amount: accamt
    })
    this.saveData()
    return true
  }

  fundtran(accto: any, toamt: any) {
    var acc = this.accounts
    var acno = this.cuser
    if (acc[acno]['accbal'] > Number(toamt)) {
      acc[acno]['accbal'] -= Number(toamt)
      acc[acno]['transaction'].push({
        type: "DEBIT",
        amount: toamt
      })
      acc[accto]['accbal'] += Number(toamt)
      acc[accto]['transaction'].push({
        type: "CREDIT",
        amount: toamt
      })
      this.saveData()
      return true
    }else{
      return false
    }
  }

  getTrans(){
    var acc = this.accounts
    var acno = this.cuser
    return acc[acno]['transaction']
  }

  saveData(){
    if(this.accounts){
      localStorage.setItem('accounts',JSON.stringify(this.accounts))
    }
    if(this.cuser){
      localStorage.setItem('cuser',JSON.stringify(this.cuser))
    }
  }
  getData(){
    if(localStorage.getItem("accounts")){
      this.accounts = JSON.parse(localStorage.getItem('accounts') || "")
    }
    if(localStorage.getItem("cuser")){
      this.cuser = JSON.parse(localStorage.getItem('cuser') || "")
    }
  }

  del(){
    delete this.accounts[this.cuser]
    this.saveData()
    return true
  }
}
