import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
// import { CdkTableModule} from '@angular/cdk/table';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
// implements OnInit
export class EmployeeComponent implements OnInit {

  isChecked = false;
  constructor() { }
  selected = 'Yellow';

  colors = [
    { id: 1, name: 'Yellow'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Red'},
    { id: 4, name: 'Pink'}];
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;


    desserts = [
      {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
      {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
      {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
      {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
      {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
    ];
    sortedData;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

  ngOnInit()  {
    // this.dataSource.paginator = this.paginator;
    this.sortedData = this.desserts.slice();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  onChange($event) {
    console.log($event);
  }

  // tslint:disable-next-line:member-ordering
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];

  // tslint:disable-next-line:member-ordering
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  // tslint:disable-next-line:member-ordering
  // @ViewChild(MatPaginator) paginator: MatPaginator;
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
