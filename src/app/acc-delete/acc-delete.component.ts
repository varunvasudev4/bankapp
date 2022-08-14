import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acc-delete',
  templateUrl: './acc-delete.component.html',
  styleUrls: ['./acc-delete.component.css']
})
export class AccDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item:any

  @Output() onCancel = new EventEmitter()

  @Output() onConfirm = new EventEmitter()

  cancel(){
    this.onCancel.emit()
  }

  delete(){
    this.onConfirm.emit()
  }

}
