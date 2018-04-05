import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  isChecked = false;
  constructor() { }
  selected = 'Yellow';

  colors = [
    { id: 1, name: 'Yellow'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Red'},
    { id: 4, name: 'Pink'}];

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }
}
