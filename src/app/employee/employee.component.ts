import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService, Hero } from '../data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
// implements OnInit
export class EmployeeComponent implements OnInit {

  isChecked = false;
  error: string;
  //
  heroes: Hero[];
  constructor(private data: DataService) { }
  selected = 'Yellow';

  heros: Hero[];


  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Five', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Six', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Saven', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  colors = [
    { id: 1, name: 'Yellow'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Red'},
    { id: 4, name: 'Pink'}];

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('form') myNgForm; // just to call resetForm method
    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }

  ngOnInit()  {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.data.getAllHeros().subscribe((res) => {
      this.heros = res;
    });

    this.data.getAllHeros().subscribe((heroes: Array<Hero>) => {
           console.log( this.heros = heroes.sort((a, b) => {
            return a.id - b.id;
        }));
     });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onChange($event) {
    console.log($event);
  }

  getEmployee() {
    console.log(this.data.getAllHeros());
    console.log(this.data.getAllHeros().subscribe(res => this.heros = res));

    // alert('Michael R');
  }

  // createNewHero(newHero: Hero) {
  //   this.data.createHero(newHero).subscribe((newHeroWithId) => {
  //     this.heroes.push(newHeroWithId);
  //     this.myNgForm.resetForm();
  //   }, (response: Response) => {
  //     if (response.status === 500) {
  //       this.error = 'errorHasOcurred';
  //     }
  //   });
  // }
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
